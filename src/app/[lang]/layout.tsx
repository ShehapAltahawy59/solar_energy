import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { LanguageProvider } from "@/components/language-provider";
import { LocaleSync } from "@/components/locale-sync";
import { getDictionary, type Locale } from "../../../lib/dictionaries";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}

export async function generateMetadata({
  params,
}: LayoutProps): Promise<Metadata> {
  const resolvedParams = await params;
  const title =
    resolvedParams.lang === "ar"
      ? "الكيان للطاقة الشمسية"
      : "Alkyan Solar Energy";
  const description =
    resolvedParams.lang === "ar"
      ? "شركة الكيان للطاقة الشمسية - حلول الطاقة المتجددة"
      : "Alkyan Solar Energy - Renewable Energy Solutions";

  return {
    metadataBase: new URL("https://alkyansolar.com"),
    title,
    description,
    openGraph: {
      type: "website",
      locale: resolvedParams.lang === "ar" ? "ar_EG" : "en_US",
      siteName: title,
      title,
      description,
      images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og-image.jpg"],
    },
    icons: {
      icon: [
        {
          url: "/images/logo/logo.webp",
          sizes: "32x32",
          type: "image/webp",
        },
        {
          url: "/images/logo/logo.webp",
          sizes: "16x16",
          type: "image/webp",
        },
      ],
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
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang);

  return (
    <LanguageProvider initialLocale={resolvedParams.lang}>
      <LocaleSync />
      <div className="flex min-h-screen flex-col w-full overflow-x-hidden">
        <Navbar initialDictionary={dict} />
        <main className="flex-1 w-full overflow-x-hidden">{children}</main>
      </div>
    </LanguageProvider>
  );
}
