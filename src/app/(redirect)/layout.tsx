import type { Metadata } from "next";
import { SITE_URL, localizedUrl } from "../../../lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "الكيان للطاقة الشمسية | Alkyan Solar Energy",
  robots: { index: false, follow: true },
  alternates: { canonical: localizedUrl("ar") },
};

// The bare domain only forwards to the Arabic site
export default function RedirectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* Also redirects crawlers and visitors without JavaScript */}
        <meta httpEquiv="refresh" content="0; url=/ar/" />
      </head>
      <body>{children}</body>
    </html>
  );
}
