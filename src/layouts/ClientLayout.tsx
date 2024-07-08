"use client";

import { PropsWithChildren } from "react";

import AnotherProvider from "@/providers/AnotherProvider";
import LocaleProvider from "@/providers/LocaleProvider";

interface ClientLayoutProps {
  locale: string;
  dictionaryPromise?: Promise<Record<string, string>>;
}

export function ClientLayout({
  children,
  locale,
  dictionaryPromise,
}: PropsWithChildren<ClientLayoutProps>) {
  return (
    <LocaleProvider dictionaryPromise={dictionaryPromise} locale={locale}>
      <AnotherProvider>{children}</AnotherProvider>
    </LocaleProvider>
  );
}
