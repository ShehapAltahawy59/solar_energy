import "../globals.css";
import { Metadata, Viewport } from "next";
import { Noto_Kufi_Arabic, Inter } from "next/font/google";
import clsx from "clsx";
import Navbar from "@/components/Navbar";
import { LanguageProvider } from "@/components/language-provider";
import { LocaleSync } from "@/components/locale-sync";
import { getDictionary, type Locale } from "../../../lib/dictionaries";
import { SITE_URL, localizedUrl } from "../../../lib/site";

// Arabic font - optimized with display swap for faster text rendering
const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  variable: "--font-noto-kufi",
  display: "swap",
});

// English font - optimized with display swap
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#16a34a",
};

export async function generateMetadata({
  params,
}: LayoutProps): Promise<Metadata> {
  const { lang } = await params;
  const { seo } = await getDictionary(lang);
  const ogImage = {
    url: "/images/og-image.jpg",
    width: 1200,
    height: 630,
    alt: seo.siteName,
  };

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: seo.homeTitle, template: `%s | ${seo.siteName}` },
    description: seo.homeDescription,
    keywords: seo.keywords,
    applicationName: seo.siteName,
    alternates: {
      canonical: localizedUrl(lang),
      languages: {
        ar: localizedUrl("ar"),
        en: localizedUrl("en"),
        "x-default": localizedUrl("ar"),
      },
    },
    openGraph: {
      type: "website",
      locale: lang === "ar" ? "ar_EG" : "en_US",
      alternateLocale: lang === "ar" ? "en_US" : "ar_EG",
      url: localizedUrl(lang),
      siteName: seo.siteName,
      title: seo.homeTitle,
      description: seo.homeDescription,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.homeTitle,
      description: seo.homeDescription,
      images: [ogImage.url],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
    icons: {
      icon: [{ url: "/images/logo/logo.webp", type: "image/webp" }],
      apple: [
        {
          url: "/images/logo/apple-touch-icon.png",
          sizes: "180x180",
          type: "image/png",
        },
      ],
    },
  };
}

export default async function LangLayout({ children, params }: LayoutProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  // Structured data so search engines can show the business in local results
  const businessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: dict.seo.siteName,
    alternateName: lang === "ar" ? "Alkyan Solar Energy" : "الكيان للطاقة الشمسية",
    description: dict.seo.homeDescription,
    url: localizedUrl(lang),
    logo: `${SITE_URL}/images/logo/logo.webp`,
    image: `${SITE_URL}/images/og-image.jpg`,
    telephone: "+201064911198",
    address: {
      "@type": "PostalAddress",
      streetAddress: dict.contact.address.text,
      addressRegion: lang === "ar" ? "الشرقية" : "Sharqia",
      addressCountry: "EG",
    },
    geo: { "@type": "GeoCoordinates", latitude: 31.027099, longitude: 30.451676 },
    hasMap: dict.contact.address.mapUrl,
    areaServed: { "@type": "Country", name: lang === "ar" ? "مصر" : "Egypt" },
    knowsAbout: dict.seo.keywords,
  };

  return (
    <html
      lang={lang}
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="overflow-x-hidden w-full"
      suppressHydrationWarning
    >
      <body
        className={clsx(
          notoKufiArabic.variable,
          inter.variable,
          lang === "en" ? "font-inter" : "font-kufi",
          "overflow-x-hidden w-full relative"
        )}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        <LanguageProvider initialLocale={lang}>
          <LocaleSync />
          <div className="flex min-h-screen flex-col w-full overflow-x-hidden">
            <Navbar initialDictionary={dict} />
            <main className="flex-1 w-full overflow-x-hidden">{children}</main>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
