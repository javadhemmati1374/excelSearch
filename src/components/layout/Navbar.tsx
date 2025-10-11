// src/components/layout/Navbar.tsx
"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { LogOut, Shield, User, UserCheck } from "lucide-react";

interface NavbarProps {
  username?: string;
  role?: "ADMIN" | "USER";
}

export function Navbar({ username, role }: NavbarProps) {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
      });

      if (response.ok) {
        router.push("/login");
        router.refresh();
      } else {
        alert("خطا در خروج از سیستم");
      }
    } catch (error) {
      console.error("Logout error:", error);
      alert("خطا در خروج از سیستم");
    }
  };

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-gray-900">
              سیستم جستجوی داده‌های تلفنی
            </h1>
          </div>
          <div className="flex items-center space-x-4 space-x-reverse">
            <div className="flex items-center text-sm text-gray-500">
              <div className="flex items-center justify-center">
                <span>{username}</span>
                <User className="h-5 w-5 mr-1" />
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="flex items-center"
            >
              <LogOut className="h-4 w-4 ml-1" />
              خروج
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
