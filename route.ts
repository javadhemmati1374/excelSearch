// src/app/api/upload/route.ts

import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../src/generated/prisma";
import ExcelJS from "exceljs";
import { Readable } from "stream";

// Interface برای Type Safety
interface PhoneDataInput {
  fileId: string;
  telNum: string;
  customTitle?: string | null;
  classificationName?: string | null;
  parentClassificationName?: string | null;
  city?: string | null;
  address?: string | null;
  regCity?: string | null;
  regProvince?: string | null;
}

declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") {
  global.prisma = prisma;
}

export async function POST(request: Request) {
  let uploadedFileId: string | undefined;

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

    // 1. ذخیره اطلاعات اولیه فایل
    const uploadedFile = await prisma.uploadedFile.create({
      data: {
        fileName: fileName,
        fileSize: fileSize,
        recordCount: 0,
        status: "processing",
      },
    });
    uploadedFileId = uploadedFile.id;

    const buffer = Buffer.from(await file.arrayBuffer());
    const stream = Readable.from(buffer);

    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.read(stream);

    const worksheet = workbook.getWorksheet(1);
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
    const headers: { [key: number]: string } = {};
    worksheet.getRow(1).eachCell({ includeEmpty: false }, (cell, colNumber) => {
      const headerText = cell.text.trim();
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
        default:
          break;
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
    const allRecords: PhoneDataInput[] = []; // ✅ Type اصلاح شده

    // 4. استخراج رکوردها
    worksheet.eachRow({ includeEmpty: false }, (row, rowNumber) => {
      if (rowNumber === 1) return;

      const rowData: PhoneDataInput = {
        fileId: uploadedFile.id,
        telNum: "",
      };

      row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
        const headerName = headers[colNumber];
        if (headerName) {
          const cellValue = cell.value ? String(cell.value).trim() : null;

          switch (headerName) {
            case "telNum":
              rowData.telNum = cellValue || "";
              break;
            case "customTitle":
              rowData.customTitle = cellValue;
              break;
            case "classificationName":
              rowData.classificationName = cellValue;
              break;
            case "parentClassificationName":
              rowData.parentClassificationName = cellValue;
              break;
            case "city":
              rowData.city = cellValue;
              break;
            case "address":
              rowData.address = cellValue;
              break;
            case "regCity":
              rowData.regCity = cellValue;
              break;
            case "regProvince":
              rowData.regProvince = cellValue;
              break;
          }
        }
      });

      if (!rowData.telNum) {
        return;
      }

      allRecords.push(rowData);
    });

    let totalRecordsInserted = 0;
    let failedProcessing = false;

    // 5. درج رکوردها به صورت Batch
    for (let i = 0; i < allRecords.length; i += BATCH_SIZE) {
      const batch = allRecords.slice(i, i + BATCH_SIZE);
      try {
        const result = await prisma.phoneData.createMany({
          data: batch, // ✅ حالا Type مطابقت دارد
          skipDuplicates: true,
        });
        totalRecordsInserted += result.count;
      } catch (batchError) {
        console.error(`خطا در درج بچ (شروع از ایندکس ${i}):`, batchError);
        failedProcessing = true;
      }
    }

    // 6. به‌روزرسانی وضعیت فایل
    let finalStatus = "completed";
    if (failedProcessing) {
      finalStatus = "partial_success";
    }

    await prisma.uploadedFile.update({
      where: { id: uploadedFileId },
      data: {
        recordCount: totalRecordsInserted,
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

    if (uploadedFileId) {
      try {
        await prisma.uploadedFile.update({
          where: { id: uploadedFileId },
          data: { status: "failed" },
        });
      } catch (updateError) {
        console.error("خطا در به‌روزرسانی وضعیت فایل:", updateError);
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
}
