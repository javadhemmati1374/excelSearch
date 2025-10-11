// // src/middleware.ts

// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export const config = {
//   matcher: [
//     "/dashboard/:path*",
//     "/api/upload",
//     "/api/files/:path*",
//     "/api/search",
//   ],
// };

// export async function middleware(req: NextRequest) {
//   // بررسی وجود کوکی session
//   const sessionCookie = req.cookies.get("phone_data_session");

//   // اگر کوکی وجود ندارد، کاربر احراز هویت نشده
//   const isAuthenticated = !!sessionCookie?.value;

//   // Redirect to login if not authenticated and trying to access protected routes
//   if (!isAuthenticated && req.nextUrl.pathname.startsWith("/dashboard")) {
//     const url = req.nextUrl.clone();
//     url.pathname = "/login";
//     return NextResponse.redirect(url);
//   }

//   // Allow API access only for authenticated users
//   if (
//     !isAuthenticated &&
//     req.nextUrl.pathname.startsWith("/api/") &&
//     !req.nextUrl.pathname.startsWith("/api/auth/")
//   ) {
//     return NextResponse.json(
//       { message: "اجازه دسترسی ندارید." },
//       { status: 401 }
//     );
//   }

//   return NextResponse.next();
// }

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/lib/session";

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

  // اگر کاربر احراز هویت شده است، session را بررسی کنیم
  if (isAuthenticated) {
    try {
      const res = NextResponse.next();
      const session = await getIronSession<SessionData>(
        req,
        res,
        sessionOptions
      );

      const isAdmin = session.role === "ADMIN";

      // مسیرهایی که فقط ادمین به آنها دسترسی دارد
      const adminOnlyPaths = ["/api/upload", "/api/files"];
      const isAdminOnlyPath = adminOnlyPaths.some((path) =>
        req.nextUrl.pathname.startsWith(path)
      );

      // اگر مسیر فقط برای ادمین است و کاربر ادمین نیست
      if (isAdminOnlyPath && !isAdmin) {
        return NextResponse.json(
          { message: "دسترسی مجاز نیست. فقط مدیران سیستم اجازه دسترسی دارند." },
          { status: 403 }
        );
      }

      return res;
    } catch (error) {
      console.error("Middleware session error:", error);

      // اگر خطا در خواندن session رخ داد، به login redirect کنیم
      if (req.nextUrl.pathname.startsWith("/dashboard")) {
        const url = req.nextUrl.clone();
        url.pathname = "/login";
        return NextResponse.redirect(url);
      }

      return NextResponse.json({ message: "خطای احراز هویت" }, { status: 401 });
    }
  }

  return NextResponse.next();
}
