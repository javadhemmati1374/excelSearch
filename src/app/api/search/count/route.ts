// src/app/api/search/count/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../generated/prisma";

const prisma = new PrismaClient();

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
  } finally {
    await prisma.$disconnect();
  }
}
