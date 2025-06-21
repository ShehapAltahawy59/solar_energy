"use client";

import Link from "next/link";
import { useDictionary } from "@/hooks/use-dictionary";
import { useLanguage } from "@/hooks/use-language";

export default function Footer() {
  const { locale } = useLanguage();
  const { dictionary, loading } = useDictionary(locale);

  if (loading || !dictionary) {
    return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="h-6 bg-gray-700 animate-pulse rounded mb-4"></div>
              <div className="h-4 bg-gray-700 animate-pulse rounded mb-8"></div>
            </div>
            <div>
              <div className="h-6 bg-gray-700 animate-pulse rounded mb-4"></div>
              <div className="space-y-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-4 bg-gray-700 animate-pulse rounded"
                  ></div>
                ))}
              </div>
            </div>
            <div>
              <div className="h-6 bg-gray-700 animate-pulse rounded mb-4"></div>
              <div className="space-y-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-4 bg-gray-700 animate-pulse rounded"
                  ></div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <div className="h-4 bg-gray-700 animate-pulse rounded max-w-md mx-auto"></div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">
              {dictionary.footer.companyName}
            </h3>
            <p className="text-gray-300 mb-8">
              {dictionary.footer.description}
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {dictionary.footer.quickLinks}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${locale}/#about`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {dictionary.footer.links.about}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/projects`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {dictionary.footer.links.projects}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/#services`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {dictionary.footer.links.services}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/#contact`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {dictionary.footer.links.contact}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {dictionary.footer.contactInfo}
            </h4>
            <div className="space-y-2 text-gray-300">
              <p>{dictionary.footer.location}</p>
              <p>{dictionary.footer.phone}</p>
              <p>{dictionary.footer.email}</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} {dictionary.footer.companyName}.{" "}
            {dictionary.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
