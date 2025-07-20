// src/app/api/auth/login/route.ts

import { NextResponse } from "next/server";
// import { getIronSession } from "iron-session"; // <<-- دیگر نیازی به این نیست
import { SessionData, getSession } from "@/lib/session"; // <<-- تغییر: SessionData و getSession
import { PrismaClient } from "../../../../generated/prisma"; // <<-- تغییر: مسیر PrismaClient (اگر قبلا انجام داده اید)
import bcrypt from "bcryptjs";

// مدیریت گلوبال PrismaClient (همانطور که در پاسخ قبلی توضیح داده شد)
declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") {
  global.prisma = prisma;
}

export async function POST(request: Request) {
  const { username, password } = await request.json();

  if (!username || !password) {
    return NextResponse.json(
      { message: "نام کاربری و رمز عبور الزامی است." },
      { status: 400 }
    );
  }

  try {
    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) {
      return NextResponse.json(
        { message: "نام کاربری یا رمز عبور اشتباه است." },
        { status: 401 }
      );
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "نام کاربری یا رمز عبور اشتباه است." },
        { status: 401 }
      );
    }

    // Set session
    const session = await getSession(); // <<-- تغییر: بدون ورودی request
    session.isAdmin = true;
    session.username = user.username;
    await session.save();

    return NextResponse.json({ message: "ورود موفقیت‌آمیز." }, { status: 200 });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { message: "خطا در ورود به سیستم." },
      { status: 500 }
    );
  }
  // نیازی به disconnect در نمونه گلوبال نیست.
}
