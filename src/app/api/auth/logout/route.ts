// src/app/api/auth/logout/route.ts

import { NextResponse } from "next/server";
// import { getIronSession } from "iron-session"; // <<-- این خط را حذف یا کامنت کنید
import { SessionData, getSession } from "@/lib/session"; // <<-- تغییر: SessionData و getSession

export async function POST(request: Request) {
  try {
    const session = await getSession(); // <<-- تغییر مهم اینجا است: بدون ورودی request
    session.destroy(); // Clear session data

    return NextResponse.json({ message: "خروج موفقیت‌آمیز." }, { status: 200 });
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json(
      { message: "خطا در خروج از سیستم." },
      { status: 500 }
    );
  }
}
