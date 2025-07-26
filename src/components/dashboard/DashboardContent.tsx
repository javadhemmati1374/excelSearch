// src/components/dashboard/DashboardContent.tsx
"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SearchSection } from "./SearchSection";
import { UploadSection } from "./UploadSection";
import { FileManagementSection } from "./FileManagementSection";

export function DashboardContent() {
  return (
    <div className="container mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">داشبورد مدیریت</h2>
      <p className="text-gray-600 mb-8">
        آپلود فایل‌های اکسل، مدیریت فایل‌ها و جستجوی داده‌های تلفنی
      </p>

      <Tabs defaultValue="manage-files" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="search">
            <span className="ml-2">جستجو</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-search h-4 w-4"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </TabsTrigger>
          <TabsTrigger value="upload">
            <span className="ml-2">آپلود</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-upload h-4 w-4"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" x2="12" y1="3" y2="15" />
            </svg>
          </TabsTrigger>
          <TabsTrigger value="manage-files">
            <span className="ml-2">مدیریت فایل‌ها</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-file-text h-4 w-4"
            >
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
              <path d="M14 2v4a2 2 0 0 0 2 2h4" />
              <path d="M10 9H8" />
              <path d="M16 13H8" />
              <path d="M16 17H8" />
            </svg>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="search" className="mt-8">
          <SearchSection />
        </TabsContent>
        <TabsContent value="upload" className="mt-8">
          <UploadSection />
        </TabsContent>
        <TabsContent value="manage-files" className="mt-8">
          <FileManagementSection />
        </TabsContent>
      </Tabs>
    </div>
  );
}
