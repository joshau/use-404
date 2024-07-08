import { use } from "react";
import { useLocale } from "@/providers/LocaleProvider";

export const useDictionary = () => {
  const { dictionaryPromise, locale } = useLocale();
  if (!dictionaryPromise) {
    throw new Error(
      `The promise to load the dictionary for the locale ${locale} is not there, did you forget to add LocaleProvider?`,
    );
  }
  return use(dictionaryPromise);
};
