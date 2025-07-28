// src/app/api/search/count/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

// مدیریت گلوبال PrismaClient
declare global {
  // eslint-disable-next-line no-var
  var __globalPrismaCount: PrismaClient | undefined;
}

const prisma = global.__globalPrismaCount || new PrismaClient();

if (process.env.NODE_ENV === "development") {
  global.__globalPrismaCount = prisma;
}

export async function GET() {
  try {
    const count = await prisma.phoneData.count();
    return NextResponse.json({ count });
  } catch (error) {
    console.error("Error fetching total record count:", error);
    return NextResponse.json(
      { message: "خطا در دریافت تعداد رکوردها." },
      { status: 500 }
    );
  }
  // نیازی به disconnect در نمونه گلوبال نیست.
}
