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

  return {
    title:
      resolvedParams.lang === "ar"
        ? "الكيان للطاقة الشمسية"
        : "Alkyan Solar Energy",
    description:
      resolvedParams.lang === "ar"
        ? "شركة الكيان للطاقة الشمسية - حلول الطاقة المتجددة"
        : "Alkyan Solar Energy - Renewable Energy Solutions",
    icons: {
      icon: [
        {
          url: "/images/logo/logo.png",
          sizes: "32x32",
          type: "image/png",
        },
        {
          url: "/images/logo/logo.png",
          sizes: "16x16",
          type: "image/png",
        },
      ],
      apple: [
        {
          url: "/images/logo/logo.png",
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
