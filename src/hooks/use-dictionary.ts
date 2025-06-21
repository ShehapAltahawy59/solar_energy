"use client";

import { useState, useEffect } from "react";
import type { Dictionary, Locale } from "../../lib/dictionaries";

export function useDictionary(locale: Locale) {
  const [dictionary, setDictionary] = useState<Dictionary | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatches
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return; // Wait for hydration

    const loadDictionary = async () => {
      try {
        setLoading(true);
        setError(null);

        // Dynamic import for client-side loading
        const dict = await import(`../../dictionaries/${locale}.json`);
        setDictionary(dict.default);
      } catch (err) {
        console.error("Failed to load dictionary:", err);
        setError("Failed to load translations");

        // Fallback to English
        try {
          const fallback = await import("../../dictionaries/en.json");
          setDictionary(fallback.default);
        } catch (fallbackErr) {
          console.error("Failed to load fallback dictionary:", fallbackErr);
        }
      } finally {
        setLoading(false);
      }
    };

    loadDictionary();
  }, [locale, mounted]);

  return { dictionary, loading: loading || !mounted, error };
}
