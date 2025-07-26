// src/app/api/files/[id]/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../generated/prisma";

// مدیریت گلوبال PrismaClient
declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") {
  global.prisma = prisma;
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  // در Next.js 15، params باید await شود
  const { id: fileId } = await params;

  try {
    // حذف فایل والد، که باعث حذف خودکار PhoneData های مرتبط هم میشود (onDelete: Cascade)
    await prisma.uploadedFile.delete({
      where: { id: fileId },
    });
    return NextResponse.json(
      { message: "فایل با موفقیت حذف شد." },
      { status: 200 }
    );
  } catch (error) {
    console.error(`Error deleting file ${fileId}:`, error);
    return NextResponse.json({ message: "خطا در حذف فایل." }, { status: 500 });
  }
  // نیازی به disconnect در نمونه گلوبال نیست
}
