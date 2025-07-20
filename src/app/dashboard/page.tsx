// src/app/dashboard/page.tsx

import { Navbar } from "@/components/layout/Navbar";
import { DashboardContent } from "@/components/dashboard/DashboardContent"; // این را بعدا خواهیم ساخت
import { sessionOptions, SessionData } from "@/lib/session"; // <<-- SessionData هم وارد شود
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// <<-- تغییر مهم اینجا است -->>
// import { getIronSession } from "iron-session/edge";  // <<-- این خط را حذف کنید
import { getIronSession } from "iron-session"; // <<-- این خط را جایگزین کنید

export default async function DashboardPage() {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.isAdmin) {
    redirect("/login"); // Fallback if middleware fails or session expires
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar username={session.username} />
      <main className="flex-1 p-6">
        <DashboardContent />
      </main>
    </div>
  );
}
