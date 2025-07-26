// src/middleware.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/api/upload",
    "/api/files/:path*",
    "/api/search",
  ],
};

export async function middleware(req: NextRequest) {
  // بررسی وجود کوکی session
  const sessionCookie = req.cookies.get("phone_data_session");

  // اگر کوکی وجود ندارد، کاربر احراز هویت نشده
  const isAuthenticated = !!sessionCookie?.value;

  // Redirect to login if not authenticated and trying to access protected routes
  if (!isAuthenticated && req.nextUrl.pathname.startsWith("/dashboard")) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // Allow API access only for authenticated users
  if (
    !isAuthenticated &&
    req.nextUrl.pathname.startsWith("/api/") &&
    !req.nextUrl.pathname.startsWith("/api/auth/")
  ) {
    return NextResponse.json(
      { message: "اجازه دسترسی ندارید." },
      { status: 401 }
    );
  }

  return NextResponse.next();
}
