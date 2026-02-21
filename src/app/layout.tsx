import "./globals.css";
import { Noto_Kufi_Arabic, Inter } from "next/font/google";
import clsx from "clsx";

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

// Load both font variables - font class applied by [lang] layout
const fontClasses = clsx(
  notoKufiArabic.variable,
  inter.variable
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className="overflow-x-hidden w-full"
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" type="image/png" href="/images/logo/logo.png" />
        <link rel="apple-touch-icon" href="/images/logo/logo.png" />
      </head>
      <body
        className={clsx(
          fontClasses,
          "font-kufi",
          "overflow-x-hidden",
          "w-full",
          "relative"
        )}
        suppressHydrationWarning
      >
        {/* Set lang/dir/font from pathname before React hydrates - prevents flash for /en/ */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var path = window.location.pathname;
                var isEn = path.startsWith('/en') || path.startsWith('/en/');
                document.documentElement.lang = isEn ? 'en' : 'ar';
                document.documentElement.dir = isEn ? 'ltr' : 'rtl';
                document.body.classList.toggle('font-inter', isEn);
                document.body.classList.toggle('font-kufi', !isEn);
              })();
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
