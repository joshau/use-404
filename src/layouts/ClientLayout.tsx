"use client";

import { PropsWithChildren } from "react";

import AnotherProvider from "@/providers/AnotherProvider";
import LocaleProvider from "@/providers/LocaleProvider";

interface ClientLayoutProps {
  locale: string;
  filteredPromise?: Promise<Record<string, string>>;
}

export function ClientLayout({
  children,
  locale,
  filteredPromise,
}: PropsWithChildren<ClientLayoutProps>) {
  return (
    <LocaleProvider filteredPromise={filteredPromise} locale={locale}>
      <AnotherProvider>{children}</AnotherProvider>
    </LocaleProvider>
  );
}
