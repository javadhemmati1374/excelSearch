// src/app/dashboard/page.tsx

import { Navbar } from "@/components/layout/Navbar";
import { DashboardContent } from "@/components/dashboard/DashboardContent";
import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  // استفاده از تابع getSession که cookies() را به درستی handle می‌کند
  const session = await getSession();

  if (!session.isAdmin && !session.role) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar username={session.username} role={session.role} />
      <main className="flex-1 p-6">
        <DashboardContent userRole={session.role} />
      </main>
    </div>
  );
}
