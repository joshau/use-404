import React, { createContext, useContext, useMemo } from "react";

export interface LocaleContextInterface {
  dictionaryPromise?: Promise<Record<string, string>>;
  locale: string;
}

export const defaultLocaleProvider: LocaleContextInterface = {
  locale: "en-us",
};

export const LocaleContext = createContext(defaultLocaleProvider);

export function useLocale() {
  return useContext(LocaleContext);
}

export default function LocaleProvider({
  children,
  dictionaryPromise,
  locale,
}: React.PropsWithChildren<{
  dictionaryPromise?: Promise<Record<string, string>>;
  locale: string;
}>): React.ReactElement {
  const contextValue = useMemo(
    () => ({ dictionaryPromise, locale }),
    [dictionaryPromise, locale],
  );

  return (
    <LocaleContext.Provider value={contextValue}>
      {children}
    </LocaleContext.Provider>
  );
}
