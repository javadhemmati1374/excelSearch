// src/components/providers/QueryProvider.tsx
"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

export function QueryProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 1000, // داده ها بعد از 5 ثانیه stale میشوند
            refetchOnWindowFocus: false, // برای سادگی، رفرش خودکار با فوکوس را غیرفعال میکنیم
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />{" "}
      {/* ابزارهای توسعه react-query */}
    </QueryClientProvider>
  );
}
