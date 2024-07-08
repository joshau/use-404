import { use } from "react";
import { useLocale } from "@/providers/LocaleProvider";

export const useDictionary = () => {
  const { locale } = useLocale();
  return use(import(`@/languages/${locale.toLocaleLowerCase()}.json`));
};
