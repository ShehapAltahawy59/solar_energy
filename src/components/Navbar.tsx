"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useDictionary } from "@/hooks/use-dictionary";
import { useLanguage } from "@/hooks/use-language";
import { LanguageSwitcher } from "./language-switcher";

const NAVBAR_HEIGHT = 64; // h-16 = 64px
const SCROLL_OFFSET = 20; // Additional padding

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { locale } = useLanguage();
  const { dictionary, loading } = useDictionary(locale);

  // ✅ All hooks MUST be called before any conditional logic
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ✅ useEffect MUST also be called before conditional return
  useEffect(() => {
    if (loading || !dictionary) return; // Guard clause inside effect

    const handleScroll = () => {
      // If we're on projects page, keep projects active
      if (pathname.includes("/projects")) {
        setActiveSection("projects");
        return;
      }

      const sections = {
        hero: document.getElementById("hero"),
        about: document.getElementById("about"),
        services: document.getElementById("services"),
        contact: document.getElementById("contact"),
      };

      const scrollPosition = window.scrollY;
      const totalOffset = NAVBAR_HEIGHT + SCROLL_OFFSET;

      // Get all sections' positions
      const sectionPositions = Object.entries(sections).map(
        ([id, element]) => ({
          id,
          top: element?.offsetTop || 0,
        })
      );

      // Sort sections by position from bottom to top
      const currentSection = sectionPositions
        .sort((a, b) => b.top - a.top)
        .find((section) => scrollPosition >= section.top - totalOffset);

      if (currentSection) {
        setActiveSection(currentSection.id);
      } else {
        setActiveSection("hero");
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    // Initial check
    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [pathname, loading, dictionary]);

  // ✅ NOW we can have conditional logic after ALL hooks
  if (loading || !dictionary) {
    return (
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20 md:h-16">
            <div className="flex items-center gap-2">
              <div className="relative w-16 h-16 md:w-12 md:h-12 rounded-full overflow-hidden bg-gray-200 animate-pulse"></div>
              <div className="hidden md:block w-48 h-6 bg-gray-200 animate-pulse rounded"></div>
            </div>
            <div className="hidden md:flex space-x-1 items-center">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-16 h-8 bg-gray-200 animate-pulse rounded"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    );
  }

  // Create nav items using dictionary (now we know dictionary exists)
  const NAV_ITEMS = [
    { label: dictionary.navigation.home, href: `/${locale}`, section: "hero" },
    {
      label: dictionary.navigation.projects,
      href: `/${locale}/projects`,
      section: "projects",
    },
    {
      label: dictionary.navigation.about,
      href: `/${locale}/#about`,
      section: "about",
    },
    {
      label: dictionary.navigation.services,
      href: `/${locale}/#services`,
      section: "services",
    },
    {
      label: dictionary.navigation.contact,
      href: `/${locale}/#contact`,
      section: "contact",
    },
  ];

  const handleNavClick = (section: string, href: string) => {
    setIsMenuOpen(false); // Close menu after click

    // For direct page navigation (like /en/projects)
    if (href.includes("/projects")) {
      router.push(href);
      return;
    }

    // For hash navigation on homepage
    if (pathname === `/${locale}` || pathname === `/${locale}/`) {
      const element = document.getElementById(section);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition +
          window.pageYOffset -
          (NAVBAR_HEIGHT + SCROLL_OFFSET);

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    } else {
      // If not on homepage and it's a hash link, navigate to homepage first
      router.push(href);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-40 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20 md:h-16">
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <div className="relative w-16 h-16 md:w-12 md:h-12 rounded-full overflow-hidden bg-white shadow-md">
              <Image
                src="/solar_energy/images/logo/re7ab.png"
                alt={dictionary.footer.companyName}
                fill
                className="object-contain p-1"
                priority
              />
            </div>
            <span className="text-xl md:text-2xl font-bold text-green-600 hidden md:block">
              {dictionary.footer.companyName}
            </span>
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-green-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-green-600"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <div className="hidden md:flex space-x-1 items-center">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.section}
                onClick={() => handleNavClick(item.section, item.href)}
                className={clsx(
                  "px-4 py-2 rounded-lg transition-all duration-200",
                  "hover:bg-green-50",
                  {
                    "text-green-600 font-semibold":
                      activeSection === item.section ||
                      (item.section === "hero" && pathname === `/${locale}`),
                    "text-gray-600":
                      activeSection !== item.section &&
                      !(item.section === "hero" && pathname === `/${locale}`),
                  }
                )}
              >
                {item.label}
              </button>
            ))}

            {/* Language Switcher */}
            <div className="ml-4">
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        <div
          className={clsx("md:hidden transition-all duration-300 ease-in-out", {
            "max-h-96 pb-8": isMenuOpen,
            "max-h-0 overflow-hidden": !isMenuOpen,
          })}
        >
          <div className="flex flex-col gap-2 pt-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.section}
                onClick={() => handleNavClick(item.section, item.href)}
                className={clsx(
                  "px-4 py-3 rounded-lg transition-all duration-200 text-right",
                  "hover:bg-green-50 w-full",
                  {
                    "bg-green-50 text-green-600 font-semibold":
                      activeSection === item.section ||
                      (item.section === "hero" && pathname === `/${locale}`),
                    "text-gray-600":
                      activeSection !== item.section &&
                      !(item.section === "hero" && pathname === `/${locale}`),
                  }
                )}
              >
                {item.label}
              </button>
            ))}

            {/* Mobile Language Switcher */}
            <div className="px-4 py-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
