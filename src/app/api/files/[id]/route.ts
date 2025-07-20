// src/app/api/files/[id]/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../generated/prisma/client";

const prisma = new PrismaClient();

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const fileId = params.id;

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
  } finally {
    await prisma.$disconnect();
  }
}
