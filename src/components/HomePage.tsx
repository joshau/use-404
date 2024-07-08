"use client";

import { useDictionary } from "@/hooks/useDictionary";

export default function HomePage() {
  const dictionary = useDictionary();
  return <>{dictionary["hello-world"]}</>;
}
