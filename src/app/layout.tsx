// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { QueryProvider } from "@/components/providers/QueryProvider"; // این را اضافه میکنیم

const inter = Inter({ subsets: ["latin"] });

const vazirmatn = localFont({
  src: [
    {
      path: "../../public/fonts/Vazirmatn-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Vazirmatn-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-vazirmatn",
});

export const metadata: Metadata = {
  title: "سیستم جستجوی داده های تلفنی",
  description: "سیستم مدیریت و جستجوی داده های تلفنی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${inter.className} ${vazirmatn.className}`}>
        <QueryProvider>
          {" "}
          {/* QueryProvider را اینجا اضافه میکنیم */}
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
