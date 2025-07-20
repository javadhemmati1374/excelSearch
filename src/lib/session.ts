import { getIronSession, IronSessionOptions } from "iron-session";
import { cookies } from "next/headers"; // <<-- این خط اضافه شده است

export interface SessionData {
  isAdmin: boolean;
  username: string;
}

export const sessionOptions: IronSessionOptions = {
  cookieName: "phone_data_session",
  password: process.env.SECRET_COOKIE_PASSWORD as string,
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

// تابع getSession اصلاح شده برای Next.js App Router
export async function getSession() {
  // <<-- ورودی Request حذف شده است
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);
  return session;
}
