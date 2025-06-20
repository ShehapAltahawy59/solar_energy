"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const NAV_ITEMS = [
  { label: "الرئيسية", href: "/", section: "hero" },
  { label: "المشروعات", href: "/projects", section: "projects" },
  { label: "من نحن", href: "/#about", section: "about" },
  { label: "خدماتنا", href: "/#services", section: "services" },
  { label: "اتصل بنا", href: "/#contact", section: "contact" },
];

const NAVBAR_HEIGHT = 64; // h-16 = 64px
const SCROLL_OFFSET = 20; // Additional padding

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If we're on projects page, keep projects active
      if (pathname === "/projects") {
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
  }, [pathname]);

  const handleNavClick = (section: string, href: string) => {
    setIsMenuOpen(false); // Close menu after click

    // For direct page navigation (like /projects)
    if (href.startsWith("/") && !href.includes("#")) {
      router.push(href);
      return;
    }

    // For hash navigation on homepage
    if (pathname === "/") {
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
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20 md:h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-16 h-16 md:w-12 md:h-12 rounded-full overflow-hidden bg-white shadow-md">
              <Image
                src="/images/logo/re7ab.png"
                alt="المهندس للطاقة الشمسية"
                fill
                className="object-contain p-1"
                priority
              />
            </div>
            <span className="text-xl md:text-2xl font-bold text-green-600 hidden md:block">
              المهندس للطاقة الشمسية
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
                      (item.section === "hero" && pathname === "/"),
                    "text-gray-600":
                      activeSection !== item.section &&
                      !(item.section === "hero" && pathname === "/"),
                  }
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div
          className={clsx(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            {
              "max-h-96 pb-4": isMenuOpen,
              "max-h-0": !isMenuOpen,
            }
          )}
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
                      (item.section === "hero" && pathname === "/"),
                    "text-gray-600":
                      activeSection !== item.section &&
                      !(item.section === "hero" && pathname === "/"),
                  }
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
