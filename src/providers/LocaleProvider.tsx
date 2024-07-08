import React, { createContext, useContext, useMemo } from "react";

export interface LocaleContextInterface {
  filteredPromise?: Promise<Record<string, string>>;
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
  filteredPromise,
  locale,
}: React.PropsWithChildren<{
  filteredPromise?: Promise<Record<string, string>>;
  locale: string;
}>): React.ReactElement {
  const contextValue = useMemo(
    () => ({ filteredPromise, locale }),
    [filteredPromise, locale]
  );

  return (
    <LocaleContext.Provider value={contextValue}>
      {children}
    </LocaleContext.Provider>
  );
}
