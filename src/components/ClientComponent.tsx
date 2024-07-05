"use client";

import { useEffect, use } from "react";

export default function ClientComponent({ dynamicLanguage }: { dynamicLanguage: Promise<any> }) {
  const language = use(dynamicLanguage);

  useEffect(() => {
    console.log("ClientComponent mounted");
  }, []);

  return <div>not found! - {language}</div>;
}