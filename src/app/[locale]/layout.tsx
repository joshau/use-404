import { ClientLayout } from "@/layouts/ClientLayout";
import { loadDictionary } from "@/lib/load-dictionary";
import { PropsWithChildren } from "react";

export default async function LayoutWithNavbarRootLayout({
  children,
  params: { locale },
}: Readonly<PropsWithChildren<{ params: { locale: string } }>>) {
  // Init the dictionary in a Server Component
  const dictionaryPromise = loadDictionary(locale);
  return (
    <ClientLayout locale={locale} dictionaryPromise={dictionaryPromise}>
      {children}
    </ClientLayout>
  );
}
