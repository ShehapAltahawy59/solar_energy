export const SITE_URL = "https://alkyansolar.com";

export const locales = ["ar", "en"] as const;

// Absolute URL for a localized page; `path` is relative to the locale root
export function localizedUrl(lang: string, path = "") {
  return `${SITE_URL}/${lang}/${path}`;
}
