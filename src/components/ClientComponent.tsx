"use client";

import { useDictionary } from "@/hooks/useDictionary";

export default function ClientComponent() {
  const dictionary = useDictionary()
  return <div>{dictionary['not-found']}</div>;
}
