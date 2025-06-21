"use client";

import { useLanguage } from "../hooks/use-language";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const languageNames = {
  en: "English",
  ar: "العربية",
};

const languageFlags = {
  en: "US",
  ar: "EGY",
};

export function LanguageSwitcher() {
  const { locale, switchLanguage, availableLocales, isRTL } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (newLocale: typeof locale) => {
    if (newLocale === locale) {
      setIsOpen(false);
      return;
    }

    setIsOpen(false);
    // Use the debounced switchLanguage function
    switchLanguage(newLocale);
  };

  return (
    <div className="relative z-[200]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
          isRTL ? "flex-row-reverse" : ""
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="text-lg">{languageFlags[locale]}</span>
        <span>{languageNames[locale]}</span>
        <ChevronDownIcon
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-[190]"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Dropdown */}
          <div
            className={`absolute z-[210] mt-1 bg-white border border-gray-300 rounded-md shadow-xl min-w-full ${
              isRTL ? "right-0" : "left-0"
            }`}
            style={{ minWidth: "120px" }}
          >
            <div className="py-1">
              {availableLocales.map((lang) => (
                <button
                  key={lang}
                  onClick={() => handleLanguageChange(lang)}
                  className={`flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                    locale === lang ? "bg-gray-50 font-medium" : ""
                  } ${
                    isRTL ? "flex-row-reverse text-right" : "flex-row text-left"
                  }`}
                >
                  <span className="text-lg">{languageFlags[lang]}</span>
                  <span>{languageNames[lang]}</span>
                  {locale === lang && (
                    <span
                      className={`text-blue-600 ${
                        isRTL ? "mr-auto" : "ml-auto"
                      }`}
                    >
                      ✓
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
