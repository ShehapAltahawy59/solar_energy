"use client";

import ar from "../../dictionaries/ar.json";
import en from "../../dictionaries/en.json";
import type { Dictionary, Locale } from "../../lib/dictionaries";

const dictionaries: Record<Locale, Dictionary> = { ar, en };

// Dictionaries are bundled (not loaded after mount) so client components
// render real text in the statically exported HTML that search engines read
export function useDictionary(locale: Locale) {
  return {
    dictionary: dictionaries[locale] ?? dictionaries.ar,
    loading: false,
    error: null,
  };
}
