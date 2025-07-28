// src/app/api/search/route.ts

import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

// مدیریت گلوبال PrismaClient
declare global {
  // eslint-disable-next-line no-var
  var __globalPrisma: PrismaClient | undefined;
}

const prisma = global.__globalPrisma || new PrismaClient();

if (process.env.NODE_ENV === "development") {
  global.__globalPrisma = prisma;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const telNum = searchParams.get("telNum");

  if (!telNum) {
    // اگر telNum خالی بود، می‌توانیم یک آرایه خالی برگردانیم یا خطا دهیم.
    // برای تجربه کاربری بهتر، شاید بهتر باشد آرایه خالی برگردانیم تا UI خالی نمایش داده شود.
    // اما با توجه به enabled در useQuery، این شرط معمولاً لازم نیست مگر برای درخواست‌های مستقیم.
    return NextResponse.json(
      { message: "شماره تلفن برای جستجو الزامی است." },
      { status: 400 }
    );
  }

  try {
    const results = await prisma.phoneData.findMany({
      where: {
        // برای جستجوی "بخشی از شماره" از contains استفاده می‌کنیم
        // و برای اینکه جستجو Case-insensitive باشد (حروف بزرگ و کوچک تفاوتی نداشته باشند)،
        // می‌توانید از mode: 'insensitive' استفاده کنید.
        telNum: {
          contains: telNum,
          mode: "insensitive", // برای جستجوی Case-insensitive
        },
      },
      take: 100, // محدودیت برای تعداد نتایج بازگشتی (اختیاری)
      orderBy: {
        // مرتب‌سازی نتایج برای نمایش بهتر (اختیاری)
        telNum: "asc",
      },
    });
    return NextResponse.json(results);
  } catch (error) {
    console.error("Error during search:", error);
    return NextResponse.json(
      { message: "خطا در انجام جستجو." },
      { status: 500 }
    );
  }
  // نیازی به disconnect در نمونه گلوبال نیست.
}
