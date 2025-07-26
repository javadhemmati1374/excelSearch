// src/components/layout/Navbar.tsx
"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogOut, User } from "lucide-react";

interface NavbarProps {
  username?: string;
}

export function Navbar({ username }: NavbarProps) {
  const router = useRouter();

  const handleLogout = async () => {
    const res = await fetch("/api/auth/logout", { method: "POST" });
    if (res.ok) {
      router.push("/login");
    } else {
      alert("خطا در خروج از سیستم.");
    }
  };

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center shadow-sm">
      <div className="flex items-center space-x-2 space-x-reverse">
        <h1 className="text-base font-bold text-black">
          سیستم جستجوی داده های تلفنی
        </h1>
      </div>
      <div className="flex items-center space-x-4 gap-x-4 space-x-reverse">
        {username && (
          <div className="flex items-center text-gray-700">
            <User className="h-4 w-4 ml-2" />
            <span className="font-medium text-sm hidden sm:inline">
              {username}
            </span>
          </div>
        )}
        <Button
          onClick={handleLogout}
          variant="outline"
          size="sm"
          className="flex items-center"
        >
          <LogOut className="h-4 w-4 ml-2" />
          <span>خروج</span>
        </Button>
      </div>
    </nav>
  );
}
