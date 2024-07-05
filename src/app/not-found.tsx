import ClientComponent from "@/components/ClientComponent";
import { Suspense } from "react";

export default function NotFound() {
  const dynamicLanguage = import('@/languages/en-us.json')

  return <Suspense>
    <ClientComponent dynamicLanguage={dynamicLanguage} />
  </Suspense>
}
