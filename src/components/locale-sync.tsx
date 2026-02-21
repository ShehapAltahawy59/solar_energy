"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Syncs html lang and dir attributes with the current locale from URL.
 * Needed for static export where middleware doesn't run - ensures correct
 * RTL/LTR and language attributes after hydration.
 */
export function LocaleSync() {
  const pathname = usePathname();

  useEffect(() => {
    const locale = pathname?.startsWith("/en") ? "en" : "ar";
    const isRTL = locale === "ar";
    document.documentElement.lang = locale;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
  }, [pathname]);

  return null;
}
