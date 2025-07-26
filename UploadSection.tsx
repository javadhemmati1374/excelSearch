// src/components/dashboard/UploadSection.tsx
"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// تعریف interface برای پاسخ API
interface UploadResponse {
  message?: string;
  fileId?: string;
  status?: string;
}

export function UploadSection() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState<
    "idle" | "uploading" | "processing" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      if (
        file.type ===
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
        file.type === "application/vnd.ms-excel"
      ) {
        setSelectedFile(file);
        setErrorMessage(null);
      } else {
        setSelectedFile(null);
        setErrorMessage("فقط فایل‌های اکسل (XLSX, XLS) مجاز هستند.");
      }
    }
  };

  const uploadMutation = useMutation<UploadResponse, Error, File>({
    mutationFn: async (file: File) => {
      setUploadStatus("uploading");
      setUploadProgress(0);
      setErrorMessage(null);

      const formData = new FormData();
      formData.append("file", file);

      const xhr = new XMLHttpRequest();
      xhr.open("POST", "/api/upload", true);

      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const percentCompleted = Math.round(
            (event.loaded * 100) / event.total
          );
          setUploadProgress(percentCompleted);
        }
      };

      return new Promise<UploadResponse>((resolve, reject) => {
        xhr.onload = () => {
          if (xhr.status === 200) {
            setUploadStatus("processing");
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(JSON.parse(xhr.responseText));
          }
        };
        xhr.onerror = () => reject({ message: "خطای شبکه یا سرور." });
        xhr.send(formData);
      });
    },
    onSuccess: (data) => {
      setUploadStatus("success");
      setSelectedFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      alert(data.message || "فایل با موفقیت آپلود و پردازش شد.");
      queryClient.invalidateQueries({ queryKey: ["uploadedFiles"] });
    },
    onError: (error) => {
      setUploadStatus("error");
      setErrorMessage(error.message || "خطا در پردازش فایل.");
      console.error("Upload Error:", error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedFile) {
      uploadMutation.mutate(selectedFile);
    } else {
      setErrorMessage("لطفا یک فایل اکسل انتخاب کنید.");
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>آپلود فایل اکسل</CardTitle>
        <CardDescription>
          فایل اکسل حاوی داده‌های تلفنی را انتخاب کنید
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div
            className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
            onClick={() => fileInputRef.current?.click()}
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-12 h-12 mb-4 text-gray-500 dark:text-gray-400 lucide lucide-cloud-upload-icon lucide-cloud-upload"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 13v8" />
                <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                <path d="m8 17 4-4 4 4" />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">
                  کلیک کنید تا فایل انتخاب کنید
                </span>{" "}
                یا فایل را بکشید و اینجا رها کنید
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                XLSX, XLS
              </p>
            </div>
            <Input
              id="file-upload"
              type="file"
              className="hidden"
              onChange={handleFileChange}
              ref={fileInputRef}
              accept=".xlsx, .xls"
            />
          </div>

          {selectedFile && (
            <div className="mt-2 text-sm text-gray-600">
              فایل انتخاب شده:{" "}
              <span className="font-semibold">{selectedFile.name}</span> (
              {(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
            </div>
          )}

          {uploadStatus === "uploading" && (
            <div className="mt-4">
              <Progress value={uploadProgress} className="w-full" />
              <p className="text-center text-sm mt-2 text-gray-600">
                در حال آپلود: {uploadProgress}%
              </p>
            </div>
          )}
          {uploadStatus === "processing" && (
            <div className="mt-4 text-center text-blue-600 text-sm">
              در حال پردازش داده‌های فایل... این عملیات ممکن است کمی زمان ببرد.
            </div>
          )}
          {errorMessage && (
            <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
          )}

          <Button
            type="submit"
            className="w-full"
            disabled={!selectedFile || uploadMutation.isPending}
          >
            {uploadMutation.isPending ? "در حال آپلود..." : "شروع آپلود"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
