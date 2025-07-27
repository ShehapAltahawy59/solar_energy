import { Metadata } from "next";
import { Noto_Kufi_Arabic, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { LanguageProvider } from "@/components/language-provider";
import { getDictionary, type Locale } from "../../../lib/dictionaries";
import clsx from "clsx";
import "../globals.css";

// Arabic font
const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-noto-kufi",
});

// English font
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}

export async function generateMetadata({
  params,
}: LayoutProps): Promise<Metadata> {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang);

  return {
    title:
      resolvedParams.lang === "ar"
        ? "المهندس للطاقة الشمسية"
        : "Al-Muhandis Solar Energy",
    description:
      resolvedParams.lang === "ar"
        ? "شركة المهندس للطاقة الشمسية - حلول الطاقة المتجددة"
        : "Al-Muhandis Solar Energy - Renewable Energy Solutions",
    icons: {
      icon: [
        {
          url: "/solar_energy/images/logo/re7ab.png",
          sizes: "32x32",
          type: "image/png",
        },
        {
          url: "/solar_energy/images/logo/re7ab.png",
          sizes: "16x16",
          type: "image/png",
        },
      ],
      apple: [
        {
          url: "/solar_energy/images/logo/re7ab.png",
          sizes: "180x180",
          type: "image/png",
        },
      ],
    },
  };
}

export default async function LangLayout({ children, params }: LayoutProps) {
  const resolvedParams = await params;
  const isRTL = resolvedParams.lang === "ar";
  const fontClass = isRTL ? notoKufiArabic.variable : inter.variable;
  const fontFamily = isRTL ? "font-kufi" : "font-inter";

  return (
    <html
      lang={resolvedParams.lang}
      dir={isRTL ? "rtl" : "ltr"}
      className="overflow-x-hidden w-full"
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" type="image/png" href="/images/logo/re7ab.png" />
        <link rel="apple-touch-icon" href="/images/logo/re7ab.png" />
      </head>
      <body
        className={clsx(
          fontClass,
          fontFamily,
          "overflow-x-hidden",
          "w-full",
          "relative"
        )}
        suppressHydrationWarning
      >
        <LanguageProvider initialLocale={resolvedParams.lang}>
          <div className="flex min-h-screen flex-col w-full overflow-x-hidden">
            <Navbar />
            <main className="flex-1 w-full overflow-x-hidden">{children}</main>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
