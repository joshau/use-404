import Link from "next/link";

export default function Header() {
  return (
    <>
      <Link href="/en-us">en-us</Link>
      <Link href="/en-us/test">en-us/test</Link>
      <Link href="/fr-ca">fr-ca</Link>
      <Link href="/fr-ca/test">fr-ca/test</Link>
    </>
  );
}
