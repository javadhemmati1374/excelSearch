// src/middleware.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getIronSession } from "iron-session";
import { sessionOptions, SessionData } from "@/lib/session"; // SessionData و sessionOptions باید وارد شوند

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/api/upload",
    "/api/files/:path*",
    "/api/search",
  ],
};

export async function middleware(req: NextRequest) {
  // <<-- تغییر مهم اینجا است -->>
  // به جای `req`، از `req.cookies` استفاده می‌کنیم
  const session = await getIronSession<SessionData>(
    req.cookies,
    sessionOptions
  );

  const { isAdmin } = session;

  // Redirect to login if not admin and trying to access protected routes
  if (!isAdmin && req.nextUrl.pathname.startsWith("/dashboard")) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // Allow API access only for authenticated admins
  if (
    !isAdmin &&
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
