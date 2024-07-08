import React, { createContext, useEffect, useMemo } from "react";
import { useLocale } from "./LocaleProvider";

export const AnotherContext = createContext({});

export default function AnotherProvider({
  children,
}: React.PropsWithChildren<{}>): React.ReactElement {
  const { locale } = useLocale();

  useEffect(() => {
    console.log(`Locale: ${locale}`);
  }, []);

  const contextValue = useMemo(() => ({}), []);

  return (
    <AnotherContext.Provider value={contextValue}>
      {children}
    </AnotherContext.Provider>
  );
}
