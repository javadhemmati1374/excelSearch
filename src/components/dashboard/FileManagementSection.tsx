// src/components/dashboard/FileManagementSection.tsx
"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { format } from "date-fns-jalali";
import { Trash2 } from "lucide-react";

interface UploadedFile {
  id: string;
  fileName: string;
  fileSize: number;
  recordCount: number;
  uploadDate: string;
  status: string;
}

// تابع کمکی برای نمایش وضعیت با استایل مناسب
const getStatusDisplay = (status: string) => {
  let bgColor = "bg-gray-100";
  let textColor = "text-gray-800";
  let displayText = "نامشخص";

  switch (status) {
    case "completed":
      bgColor = "bg-green-100";
      textColor = "text-green-800";
      displayText = "تکمیل شده";
      break;
    case "processing":
      bgColor = "bg-blue-100";
      textColor = "text-blue-800";
      displayText = "در حال پردازش";
      break;
    case "failed":
      bgColor = "bg-red-100";
      textColor = "text-red-800";
      displayText = "خطا";
      break;
    case "partial_success": // اگر این وضعیت را اضافه کرده‌اید
      bgColor = "bg-yellow-100";
      textColor = "text-yellow-800";
      displayText = "موفقیت جزئی";
      break;
    default:
      displayText = "خطا"; // Default for unknown status
      break;
  }
  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-semibold ${bgColor} ${textColor}`}
    >
      {displayText}
    </span>
  );
};

export function FileManagementSection() {
  const queryClient = useQueryClient();

  // Fetch uploaded files
  const {
    data: files,
    isLoading,
    isError,
    error,
  } = useQuery<UploadedFile[]>({
    queryKey: ["uploadedFiles"],
    queryFn: async () => {
      const res = await fetch("/api/files");
      if (!res.ok) {
        throw new Error("Failed to fetch files");
      }
      return res.json();
    },
  });

  // Delete file mutation
  const deleteMutation = useMutation({
    mutationFn: async (fileId: string) => {
      const res = await fetch(`/api/files/${fileId}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to delete file");
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["uploadedFiles"] });
      queryClient.invalidateQueries({ queryKey: ["searchCounts"] });
      alert("فایل با موفقیت حذف شد.");
    },
    onError: (err: Error) => {
      alert(`خطا در حذف فایل: ${err.message}`);
    },
  });

  const handleDeleteFile = (fileId: string) => {
    if (
      confirm("آیا از حذف این فایل و تمامی داده‌های مرتبط با آن اطمینان دارید؟")
    ) {
      deleteMutation.mutate(fileId);
    }
  };

  if (isLoading)
    return (
      <div className="text-center text-gray-500 py-8">
        در حال بارگذاری فایل‌ها...
      </div>
    );
  if (isError)
    return (
      <div className="text-center text-red-500 py-8">
        خطا در بارگذاری فایل‌ها: {error?.message}
      </div>
    );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-right">مدیریت فایل‌های آپلود شده</CardTitle>
        <CardDescription className="text-right">
          لیست فایل‌های اکسل آپلود شده و وضعیت آن‌ها
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-4">
        {files && files.length === 0 ? (
          <p className="text-center text-gray-500 py-8">
            هنوز هیچ فایلی آپلود نشده است.
          </p>
        ) : (
          <>
            {/* Table View for larger screens (md and up) */}
            <div className="relative w-full overflow-x-auto hidden md:block">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-center" scope="col">
                      عملیات
                    </TableHead>
                    <TableHead scope="col">تاریخ آپلود</TableHead>
                    <TableHead scope="col">وضعیت</TableHead>
                    <TableHead scope="col">تعداد رکورد</TableHead>
                    <TableHead scope="col">حجم</TableHead>
                    <TableHead scope="col">نام فایل</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {files?.map((file) => (
                    <TableRow key={file.id}>
                      <TableCell className="text-center">
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleDeleteFile(file.id)}
                          disabled={deleteMutation.isPending}
                          aria-label={`حذف فایل ${file.fileName}`}
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="ms-1">حذف</span>
                        </Button>
                      </TableCell>
                      <TableCell>
                        {format(new Date(file.uploadDate), "yyyy/MM/dd HH:mm")}
                      </TableCell>
                      <TableCell>{getStatusDisplay(file.status)}</TableCell>
                      <TableCell>
                        {file.recordCount.toLocaleString("fa-IR")}
                      </TableCell>
                      <TableCell>
                        {(file.fileSize / (1024 * 1024)).toFixed(2)} MB
                      </TableCell>
                      <TableCell className="font-medium" scope="row">
                        {file.fileName}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Card View for smaller screens (mobile) */}
            <div className="grid grid-cols-1 gap-4 md:hidden">
              {files?.map((file) => (
                <Card key={file.id} className="p-4">
                  <div className="flex flex-col gap-2">
                    {/* <<-- بخش اصلی: نام فایل و وضعیت در یک خط (یا چند خط) -->> */}
                    <div className="flex flex-row-reverse justify-between items-center mb-2 flex-wrap gap-2">
                      <p className="text-lg font-bold text-primary break-words">
                        {file.fileName}
                      </p>
                      {getStatusDisplay(file.status)}
                    </div>

                    {/* <<-- جزئیات دیگر فایل در قالب dl/dt/dd -->> */}
                    <dl className="flex flex-col text-sm text-foreground gap-1">
                      <div className="flex flex-row-reverse justify-between items-start gap-1 flex-wrap">
                        <dt className="font-semibold text-muted-foreground whitespace-nowrap">
                          :حجم
                        </dt>
                        <dd className="flex-1 text-left break-words">
                          {(file.fileSize / (1024 * 1024)).toFixed(2)} MB
                        </dd>
                      </div>
                      <div className="flex flex-row-reverse justify-between items-start gap-1 flex-wrap">
                        <dt className="font-semibold text-muted-foreground whitespace-nowrap">
                          :تعداد رکورد
                        </dt>
                        <dd className="flex-1 text-left break-words">
                          {file.recordCount.toLocaleString("fa-IR")}
                        </dd>
                      </div>
                      <div className="flex flex-row-reverse justify-between items-start gap-1 flex-wrap">
                        <dt className="font-semibold text-muted-foreground whitespace-nowrap">
                          :تاریخ آپلود
                        </dt>
                        <dd className="flex-1 text-left break-words">
                          {format(
                            new Date(file.uploadDate),
                            "yyyy/MM/dd HH:mm"
                          )}
                        </dd>
                      </div>
                    </dl>
                    {/* <<-- دکمه حذف در پایین کارت و در مرکز -->> */}
                    <div className="mt-4 text-center">
                      <Button
                        variant="destructive"
                        size="sm"
                        className="w-full cursor-pointer"
                        onClick={() => handleDeleteFile(file.id)}
                        disabled={deleteMutation.isPending}
                        aria-label={`حذف فایل ${file.fileName}`}
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="ms-1">حذف</span>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
