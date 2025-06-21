"use client";

import { useState, ReactNode } from "react";
import { LanguageProvider as LanguageContextProvider } from "../contexts/language-context";
import type { Locale } from "../../lib/dictionaries";

interface LanguageProviderProps {
  children: ReactNode;
  initialLocale: Locale;
}

export function LanguageProvider({
  children,
  initialLocale,
}: LanguageProviderProps) {
  const [locale, setLocale] = useState<Locale>(initialLocale);

  return (
    <LanguageContextProvider locale={locale} setLocale={setLocale}>
      {children}
    </LanguageContextProvider>
  );
}
