// src/components/dashboard/SearchSection.tsx
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";

interface PhoneDataResult {
  id: string;
  telNum: string;
  customTitle: string | null;
  classificationName: string | null;
  parentClassificationName: string | null;
  city: string | null;
  address: string | null;
  regCity: string | null;
  regProvince: string | null;
}

export function SearchSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  const { data: totalRecordCount, isLoading: isLoadingCount } =
    useQuery<number>({
      queryKey: ["searchCounts"],
      queryFn: async () => {
        const res = await fetch("/api/search/count");
        if (!res.ok) throw new Error("Failed to fetch record count");
        const data = await res.json();
        return data.count;
      },
      staleTime: 60 * 1000,
    });

  const {
    data: searchResults,
    isLoading: isSearching,
    isError: isSearchError,
    error: searchError,
  } = useQuery<PhoneDataResult[]>({
    queryKey: ["phoneSearch", debouncedSearchTerm],
    queryFn: async () => {
      if (!debouncedSearchTerm) return [];
      const res = await fetch(`/api/search?telNum=${debouncedSearchTerm}`);
      if (!res.ok) {
        throw new Error("Failed to fetch search results");
      }
      return res.json();
    },
    enabled: !!debouncedSearchTerm,
    staleTime: 0,
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-right">جستجوی داده‌ها</CardTitle>
        <CardDescription className="text-right">
          جستجو بر اساس شماره تلفن. تعداد کل رکوردها:{" "}
          {isLoadingCount ? "..." : totalRecordCount?.toLocaleString("fa-IR")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row-reverse items-center gap-2">
          <Input
            type="tel"
            placeholder="شماره تلفن را وارد کنید"
            value={searchTerm}
            onChange={handleSearchInputChange}
            className="w-full text-right"
            aria-label="شماره تلفن برای جستجو"
          />
          <Button disabled={isSearching} aria-label="جستجو">
            <Search className="h-4 w-4" />
            <span className="sr-only">جستجو</span>
          </Button>
        </div>

        <div className="mt-8">
          {isSearching && debouncedSearchTerm && (
            <p className="text-center text-gray-500">در حال جستجو...</p>
          )}
          {isSearchError && (
            <p className="text-center text-red-500">
              خطا در جستجو: {searchError?.message}
            </p>
          )}

          {searchResults && searchResults.length > 0 && (
            <>
              {/* Table View for larger screens (md and up) - No truncate on cells */}
              <div className="relative w-full overflow-x-auto hidden md:block">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]" scope="col">
                        شماره تلفن
                      </TableHead>
                      <TableHead scope="col">عنوان اختصاصی</TableHead>
                      <TableHead scope="col">نام دسته‌بندی</TableHead>
                      <TableHead scope="col">دسته‌بندی والد</TableHead>
                      <TableHead scope="col">شهر</TableHead>
                      <TableHead scope="col">آدرس</TableHead>
                      <TableHead scope="col">شهر ثبت</TableHead>
                      <TableHead scope="col">استان ثبت</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {searchResults.map((result) => (
                      <TableRow key={result.id}>
                        <TableCell className="font-medium" scope="row">
                          {result.telNum}
                        </TableCell>
                        <TableCell>{result.customTitle || "-"}</TableCell>
                        <TableCell>
                          {result.classificationName || "-"}
                        </TableCell>
                        <TableCell>
                          {result.parentClassificationName || "-"}
                        </TableCell>
                        <TableCell>{result.city || "-"}</TableCell>
                        <TableCell>{result.address || "-"}</TableCell>
                        <TableCell>{result.regCity || "-"}</TableCell>
                        <TableCell>{result.regProvince || "-"}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Card View for smaller screens (mobile) - No truncate on content */}
              <div className="grid grid-cols-1 gap-4 md:hidden">
                {searchResults.map((result) => (
                  <Card key={result.id} className="p-4">
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-center mb-2 flex-wrap gap-2">
                        <p
                          id={`telnum-${result.id}`}
                          className="text-lg font-bold text-primary"
                        >
                          {result.telNum}
                        </p>
                        {result.customTitle && (
                          <span className="text-sm text-muted-foreground bg-accent rounded-full px-3 py-1">
                            {result.customTitle}
                          </span>
                        )}
                      </div>
                      <dl className="flex flex-col text-sm text-foreground gap-1">
                        {result.classificationName && (
                          <div className="flex flex-row-reverse items-start gap-1 flex-wrap">
                            <dd className="font-semibold text-muted-foreground">
                              :دسته‌بندی
                            </dd>
                            <dt className="flex-1 text-right break-words">
                              {result.classificationName}
                            </dt>
                          </div>
                        )}
                        {result.parentClassificationName && (
                          <div className="flex flex-row-reverse items-start gap-1 flex-wrap">
                            <dd className="font-semibold text-muted-foreground">
                              :دسته‌بندی والد
                            </dd>
                            <dt className="flex-1 text-right break-words">
                              {result.parentClassificationName}
                            </dt>
                          </div>
                        )}
                        {result.city && (
                          <div className="flex flex-row-reverse items-start gap-1 flex-wrap">
                            <dd className="font-semibold text-muted-foreground">
                              :شهر
                            </dd>
                            <dt className="flex-1 text-right break-words">
                              {result.city}
                            </dt>
                          </div>
                        )}
                        {result.address && (
                          <div className="flex flex-row-reverse items-start gap-1 flex-wrap">
                            <dd className="font-semibold text-muted-foreground">
                              :آدرس
                            </dd>
                            <dt className="flex-1 text-right break-words">
                              {result.address}
                            </dt>
                          </div>
                        )}
                        {result.regCity && (
                          <div className="flex flex-row-reverse items-start gap-1 flex-wrap">
                            <dd className="font-semibold text-muted-foreground">
                              :شهر ثبت
                            </dd>
                            <dt className="flex-1 text-right break-words">
                              {result.regCity}
                            </dt>
                          </div>
                        )}
                        {result.regProvince && (
                          <div className="flex flex-row-reverse items-start gap-1 flex-wrap">
                            <dd className="font-semibold text-muted-foreground">
                              :استان ثبت
                            </dd>
                            <dt className="flex-1 text-right break-words">
                              {result.regProvince}
                            </dt>
                          </div>
                        )}
                      </dl>
                    </div>
                  </Card>
                ))}
              </div>
            </>
          )}

          {searchResults &&
            searchResults.length === 0 &&
            debouncedSearchTerm &&
            !isSearching && (
              <p className="text-center text-gray-500">نتیجه‌ای یافت نشد.</p>
            )}
          {!debouncedSearchTerm && !searchResults && (
            <p className="text-center text-gray-500 mt-4">
              برای جستجو، شماره تلفن را وارد کنید
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
