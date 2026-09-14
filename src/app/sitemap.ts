import type { MetadataRoute } from "next";
import { locales, localizedUrl } from "../../lib/site";

export const dynamic = "force-static";

const pages = ["", "projects/"];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap((page) =>
    locales.map((lang) => ({
      url: localizedUrl(lang, page),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: page === "" ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, localizedUrl(l, page)])
        ),
      },
    }))
  );
}
