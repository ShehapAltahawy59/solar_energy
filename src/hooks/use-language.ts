"use client";

import { useRouter, usePathname } from "next/navigation";
import { startTransition } from "react";
import { useLanguageContext } from "../contexts/language-context";
import type { Locale } from "../../lib/dictionaries";

export function useLanguage() {
  const router = useRouter();
  const pathname = usePathname();
  const { locale, setLocale, isRTL } = useLanguageContext();

  const switchLanguage = (newLocale: Locale) => {
    if (locale === newLocale) return;

    // Extract the current path without the locale
    const segments = pathname.split("/");
    const currentLocale = segments[1] as Locale;

    // Replace the locale in the path
    let newPath = pathname;
    if (currentLocale === locale) {
      newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    } else {
      newPath = `/${newLocale}${pathname}`;
    }

    // Update the context and route with React 18 transition
    startTransition(() => {
      setLocale(newLocale);

      // Delay routing by 1 animation frame to prevent race conditions
      requestAnimationFrame(() => {
        router.push(newPath);
      });
    });
  };

  const getLocalizedPath = (path: string, targetLocale?: Locale) => {
    const targetLang = targetLocale || locale;
    return `/${targetLang}${path.startsWith("/") ? path : `/${path}`}`;
  };

  return {
    locale,
    isRTL,
    switchLanguage,
    getLocalizedPath,
    availableLocales: ["en", "ar"] as Locale[],
  };
}
