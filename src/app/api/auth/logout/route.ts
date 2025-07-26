// src/app/api/auth/logout/route.ts

import { NextResponse } from "next/server";
import { getSession } from "@/lib/session";

export async function POST() {
  try {
    const session = await getSession();
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
