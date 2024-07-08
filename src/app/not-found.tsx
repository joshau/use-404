import ClientComponent from "@/components/ClientComponent";

export default function DefaultNotFound() {
  // The root layout throws a clear error saying that there's no dictionary for the locale
  // because there's no LocaleProvider either here or in the root layout.
  return <ClientComponent />;
}
