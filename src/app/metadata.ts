import { Metadata } from "next";

export const metadata: Metadata = {
  title: "المهندس للطاقة الشمسية - حلول الطاقة الشمسية في مصر",
  description:
    "شركة رائدة في مجال الطاقة الشمسية في مصر. نقدم حلولاً متكاملة للمنازل والشركات والمصانع. وفر في فاتورة الكهرباء واحمِ البيئة.",
  keywords: [
    "طاقة شمسية",
    "ألواح شمسية",
    "طاقة متجددة",
    "توفير الكهرباء",
    "طاقة نظيفة",
    "شركة طاقة شمسية",
    "تركيب ألواح شمسية",
    "مصر",
    "القاهرة",
  ],
  authors: [{ name: "المهندس للطاقة الشمسية" }],
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: "https://greentrack.eg",
    siteName: "المهندس للطاقة الشمسية",
    title: "المهندس للطاقة الشمسية - حلول الطاقة الشمسية في مصر",
    description:
      "شركة رائدة في مجال الطاقة الشمسية في مصر. نقدم حلولاً متكاملة للمنازل والشركات والمصانع.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "المهندس للطاقة الشمسية",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "المهندس للطاقة الشمسية - حلول الطاقة الشمسية في مصر",
    description:
      "شركة رائدة في مجال الطاقة الشمسية في مصر. نقدم حلولاً متكاملة للمنازل والشركات والمصانع.",
    images: ["/images/og-image.jpg"],
  },
  viewport: "width=device-width, initial-scale=1",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};
