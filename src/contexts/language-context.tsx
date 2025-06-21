"use client";

import { createContext, useContext, ReactNode } from "react";
import type { Locale } from "../../lib/dictionaries";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

interface LanguageProviderProps {
  children: ReactNode;
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

export function LanguageProvider({
  children,
  locale,
  setLocale,
}: LanguageProviderProps) {
  const isRTL = locale === "ar";

  return (
    <LanguageContext.Provider value={{ locale, setLocale, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguageContext() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error(
      "useLanguageContext must be used within a LanguageProvider"
    );
  }
  return context;
}
