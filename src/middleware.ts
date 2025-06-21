import { NextRequest, NextResponse } from "next/server";

console.log("Middleware file is being loaded");

const locales = ["en", "ar"];
const defaultLocale = "ar";

function getLocale(request: NextRequest): string {
  // Check if locale is in URL
  const pathname = request.nextUrl.pathname;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return pathname.split("/")[1];

  // Check Accept-Language header
  const acceptLanguage = request.headers.get("accept-language") || "";
  const preferredLocale = acceptLanguage
    .split(",")
    .map((lang) => lang.split(";")[0].trim())
    .find((lang) => locales.includes(lang));

  return preferredLocale || defaultLocale;
}

export function middleware(request: NextRequest) {
  console.log("==== Middleware Execution Start ====");
  const pathname = request.nextUrl.pathname;

  console.log("Middleware triggered for path:", pathname);
  console.log("Request URL:", request.url);

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  console.log("Path has locale:", pathnameHasLocale);

  if (pathnameHasLocale) {
    console.log("Pathname already has locale, returning");
    return;
  }

  // Redirect if no locale in pathname
  const locale = getLocale(request);
  console.log("Selected locale:", locale);

  const newUrl = new URL(`/${locale}${pathname}`, request.url);
  console.log("Redirecting to:", newUrl.toString());

  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images/ (public images)
     */
    "/((?!_next/static|_next/image|favicon.ico|images/).*)",
  ],
};
