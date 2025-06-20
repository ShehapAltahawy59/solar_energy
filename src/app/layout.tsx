import "./globals.css";
import { Metadata } from "next";
import { Noto_Kufi_Arabic } from "next/font/google";
import Navbar from "@/components/Navbar";
import clsx from "clsx";

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-noto-kufi",
});

export const metadata: Metadata = {
  title: "الرحاب للطاقة الشمسية",
  description: "شركة الرحاب للطاقة الشمسية - حلول الطاقة المتجددة",
  icons: {
    icon: [
      {
        url: "/images/logo/re7ab.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/images/logo/re7ab.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/images/logo/re7ab.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className="overflow-x-hidden w-full">
      <head>
        <link rel="icon" type="image/png" href="/images/logo/re7ab.png" />
        <link rel="apple-touch-icon" href="/images/logo/re7ab.png" />
      </head>
      <body
        className={clsx(
          notoKufiArabic.variable,
          "font-kufi",
          "overflow-x-hidden",
          "w-full",
          "relative"
        )}
      >
        <div className="flex min-h-screen flex-col w-full overflow-x-hidden">
          <Navbar />
          <main className="flex-1 w-full overflow-x-hidden">{children}</main>
        </div>
      </body>
    </html>
  );
}
