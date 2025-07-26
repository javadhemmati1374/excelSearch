import { getIronSession, SessionOptions } from "iron-session";
import { cookies } from "next/headers";

export interface SessionData {
  isAdmin: boolean;
  username: string;
}

export const sessionOptions: SessionOptions = {
  cookieName: "phone_data_session",
  password: process.env.SECRET_COOKIE_PASSWORD as string,
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

// تابع getSession اصلاح شده برای Next.js 15
export async function getSession() {
  // در Next.js 15، cookies() باید await شود
  const cookieStore = await cookies();
  const session = await getIronSession<SessionData>(
    cookieStore,
    sessionOptions
  );
  return session;
}
