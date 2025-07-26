// src/app/api/upload/route.ts

import { NextResponse } from "next/server";
// مسیر صحیح PrismaClient با توجه به تنظیمات 'output' در schema.prisma
import { PrismaClient } from "../../../../src/generated/prisma";
import ExcelJS from "exceljs";
import { Readable } from "stream"; // برای تبدیل Buffer به ReadableStream

// بهترین روش برای مدیریت PrismaClient در Next.js App Router
// این کار از ایجاد نمونه‌های متعدد و خطاهای "too many connections" جلوگیری می‌کند.
declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") {
  global.prisma = prisma;
}

// export const config با bodyParser: false برای App Router لازم نیست.
// request.formData() به صورت خودکار بدنه درخواست را parse می‌کند.

export async function POST(request: Request) {
  let uploadedFileId: string | undefined; // تغییر: حذف number از type

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json(
        { message: "فایلی برای آپلود یافت نشد." },
        { status: 400 }
      );
    }

    const fileName = file.name;
    const fileSize = file.size;

    // 1. ذخیره اطلاعات اولیه فایل در دیتابیس با وضعیت "processing"
    const uploadedFile = await prisma.uploadedFile.create({
      data: {
        fileName: fileName,
        fileSize: fileSize,
        recordCount: 0, // فعلاً صفر، بعداً آپدیت می‌شود
        status: "processing",
      },
    });
    uploadedFileId = uploadedFile.id; // این حالا string است

    const buffer = Buffer.from(await file.arrayBuffer());
    const stream = Readable.from(buffer); // تبدیل Buffer به ReadableStream

    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.read(stream);

    const worksheet = workbook.getWorksheet(1); // فرض می‌کنیم داده‌ها در اولین شیت هستند
    if (!worksheet) {
      if (uploadedFileId) {
        await prisma.uploadedFile.update({
          where: { id: uploadedFileId },
          data: { status: "failed" },
        });
      }
      return NextResponse.json(
        { message: "فایل اکسل خالی یا نامعتبر است." },
        { status: 400 }
      );
    }

    // 2. استخراج و نگاشت هدرها
    const headers: { [key: number]: string } = {}; // کلید باید از نوع number باشد (شماره ستون)
    worksheet.getRow(1).eachCell({ includeEmpty: false }, (cell, colNumber) => {
      const headerText = cell.text.trim();
      // نگاشت نام ستون‌های اکسل به نام فیلدهای مدل Prisma
      switch (headerText) {
        case "TelNum":
          headers[colNumber] = "telNum";
          break;
        case "CustomTitle":
          headers[colNumber] = "customTitle";
          break;
        case "ClassificationName":
          headers[colNumber] = "classificationName";
          break;
        case "ParentClassificationName":
          headers[colNumber] = "parentClassificationName";
          break;
        case "City":
          headers[colNumber] = "city";
          break;
        case "Address":
          headers[colNumber] = "address";
          break;
        case "RegCity":
          headers[colNumber] = "regCity";
          break;
        case "RegProvince":
          headers[colNumber] = "regProvince";
          break;
        // موارد دیگر را در صورت نیاز اضافه کنید
        default:
          break; // ستون‌های نامعتبر را نادیده بگیرید
      }
    });

    // 3. اطمینان از وجود ستون TelNum
    if (!Object.values(headers).includes("telNum")) {
      if (uploadedFileId) {
        await prisma.uploadedFile.update({
          where: { id: uploadedFileId },
          data: { status: "failed" },
        });
      }
      return NextResponse.json(
        {
          message:
            'ستون "TelNum" در فایل اکسل یافت نشد. لطفا ساختار فایل را بررسی کنید.',
        },
        { status: 400 }
      );
    }

    const BATCH_SIZE = 5000;
    const allRecords: Record<string, string | null | number>[] = []; // آرایه‌ای برای نگهداری تمام رکوردهای استخراج شده

    // 4. استخراج رکوردها از شیت به صورت سینکرونوس
    // این حلقه باید سینکرونوس باشد تا تمام داده ها قبل از شروع Batch Insert جمع آوری شوند.
    worksheet.eachRow({ includeEmpty: false }, (row, rowNumber) => {
      if (rowNumber === 1) return; // هدر را رد کنید

      const rowData: { [key: string]: string | null | number } = {
        fileId: uploadedFile.id, // اضافه کردن fileId
      };

      row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
        const headerName = headers[colNumber];
        if (headerName) {
          rowData[headerName] = cell.value ? String(cell.value).trim() : null;
        }
      });

      // اطمینان از وجود telNum
      if (!rowData.telNum) {
        // console.warn(`ردیف ${rowNumber} به دلیل نبود TelNum نادیده گرفته شد.`);
        return;
      }

      allRecords.push(rowData); // اضافه کردن رکورد به آرایه اصلی
    });

    let totalRecordsInserted = 0;
    let failedProcessing = false;

    // 5. درج رکوردها در دیتابیس به صورت Batch (خارج از حلقه eachRow)
    for (let i = 0; i < allRecords.length; i += BATCH_SIZE) {
      const batch = allRecords.slice(i, i + BATCH_SIZE);
      try {
        const result = await prisma.phoneData.createMany({
          data: batch,
          skipDuplicates: true, // اگر شماره تکراری بود، از آن صرف نظر کند
        });
        totalRecordsInserted += result.count; // شمارش رکوردهای موفقیت‌آمیز
      } catch (batchError) {
        console.error(`خطا در درج بچ (شروع از ایندکس ${i}):`, batchError);
        failedProcessing = true; // نشانگر بروز خطا در حداقل یک بچ
        // اینجا می‌توانید تصمیم بگیرید که آیا آپلود کلاً Fail شود یا با موفقیت جزئی ادامه یابد.
      }
    }

    // 6. به‌روزرسانی وضعیت و تعداد رکوردهای فایل آپلود شده
    let finalStatus = "completed";
    if (failedProcessing) {
      finalStatus = "partial_success"; // یا 'failed' اگر هیچ رکوردی درج نشده باشد
    }

    await prisma.uploadedFile.update({
      where: { id: uploadedFileId }, // حالا مطمئناً string است
      data: {
        recordCount: totalRecordsInserted, // تعداد رکوردهای واقعاً درج شده
        status: finalStatus,
      },
    });

    return NextResponse.json(
      {
        message: `فایل "${fileName}" با موفقیت آپلود و ${totalRecordsInserted} رکورد پردازش شد.`,
        fileId: uploadedFileId,
        status: finalStatus,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("خطا در آپلود/پردازش فایل:", error);

    // اگر خطایی رخ داد و فایل اولیه در دیتابیس ثبت شده بود، وضعیت آن را 'failed' می‌کنیم
    if (uploadedFileId) {
      try {
        await prisma.uploadedFile.update({
          where: { id: uploadedFileId },
          data: { status: "failed" },
        });
      } catch (updateError) {
        console.error(
          "خطا در به‌روزرسانی وضعیت فایل به 'failed':",
          updateError
        );
      }
    }

    const errorMessage =
      error instanceof Error ? error.message : "خطای ناشناخته";
    return NextResponse.json(
      {
        message: `خطا در پردازش فایل: ${errorMessage}`,
        status: "error",
      },
      { status: 500 }
    );
  }
  // با استفاده از نمونه گلوبال Prisma، نیازی به prisma.$disconnect() در نهایت نیست.
  // Prisma خودش connection pooling را مدیریت می‌کند.
}
