// src/app/api/files/route.ts

import { NextResponse } from "next/server";
// <<-- تغییر: مسیر صحیح PrismaClient
import { PrismaClient } from "../../../generated/prisma"; // مسیر نسبی از src/app/api/files/route.ts

// <<-- تغییر: اضافه کردن مدیریت گلوبال PrismaClient -->>
declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") {
  global.prisma = prisma;
}

export async function GET() {
  try {
    const files = await prisma.uploadedFile.findMany({
      orderBy: {
        uploadDate: "desc", // نمایش جدیدترین فایل ها ابتدا
      },
    });
    return NextResponse.json(files);
  } catch (error) {
    console.error("Error fetching uploaded files:", error);
    return NextResponse.json(
      { message: "خطا در دریافت لیست فایل‌ها." },
      { status: 500 }
    );
  }
  // <<-- تغییر: حذف finally و prisma.$disconnect() -->>
  // نیازی به disconnect در نمونه گلوبال نیست.
  // Prisma خودش connection pooling را مدیریت می‌کند.
}
