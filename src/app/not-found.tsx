"use client";

import { use } from "react";

export default function NotFound() {
  const thing = use(new Promise((resolve) => resolve("ok!")));
  return <>not found! - {thing}</>;
}
