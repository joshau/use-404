import { ClientLayout } from "@/layouts/ClientLayout";
import { PropsWithChildren } from "react";

export default async function LayoutWithNavbarRootLayout({
  children,
  params: { locale },
}: Readonly<PropsWithChildren<{ params: { locale: string } }>>) {
  return (
    <ClientLayout locale={locale}>
      {children}
    </ClientLayout>
  );
}
