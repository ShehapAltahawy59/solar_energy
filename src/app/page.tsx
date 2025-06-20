"use client";

import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import WhyUs from "@/components/WhyUs";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import SolarHeaterSection from "@/components/SolarHeaterSection";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";

// Sample projects data - replace with actual data from your backend
const featuredProjects = [
  {
    id: "1",
    title: "محطة طاقة شمسية زراعية",
    location: "الفرافرة",
    capacity: "150 كيلوواط",
    imageUrl: "/images/projects/agriculture/project_agriculture_1.jpg",
    description: "محطة طاقة شمسية للأستاذ عماد فرفور والاستاذ علاء الضبع",
    client: "عماد فرفور وعلاء الضبع",
  },
  {
    id: "2",
    title: "محطة طاقة شمسية صناعية",
    location: "طريق مصر اسكندرية الزراعي - الغربية",
    capacity: "100 كيلوواط",
    imageUrl: "/images/projects/agriculture/project_agriculture_3.jpg",
    description: "محطة طاقة شمسية لمصنع المراعي",
    client: "أحمد عايد",
  },
  {
    id: "3",
    title: "محطة طاقة شمسية زراعية",
    location: "وادي النطرون - العلمين",
    capacity: "90 كيلوواط",
    imageUrl: "/images/projects/agriculture/project_agriculture_4.jpg",
    description: "محطة طاقة شمسية لمزرعة نبع البركة",
  },
];

const ContactButtons = () => {
  const openWhatsApp = () => {
    window.open(`https://wa.me/201090006997`, "_blank");
  };

  return (
    <div
      className="fixed left-4 top-[80%] -translate-y-1/2 z-50 flex flex-col gap-4"
      dir="ltr"
    >
      <a href="tel:01065690807" className="group flex items-center">
        <span className="bg-green-600 text-white py-2 px-3 rounded-lg shadow-lg flex items-center gap-2 transform transition-transform duration-300 group-hover:-translate-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
              clipRule="evenodd"
            />
          </svg>
          <span className="font-semibold text-sm">01065690807</span>
        </span>
      </a>

      <button onClick={openWhatsApp} className="group flex items-center">
        <span className="bg-[#25D366] text-white py-2 px-3 rounded-lg shadow-lg flex items-center gap-2 transform transition-transform duration-300 group-hover:-translate-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
          </svg>
          <span className="font-semibold text-sm">واتساب</span>
        </span>
      </button>
    </div>
  );
};

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <ContactButtons />
      <Navbar />
      {/* Hero Section Group - Everything that should be active under "الرئيسية" */}
      <div className="flex flex-col w-full">
        <section id="hero" className="relative w-full">
          <HeroSection />
          <ProjectsCarousel projects={featuredProjects} />
          <WhyUs />
        </section>

        {/* About Section */}
        <section id="about" className="relative w-full">
          <AboutSection />
          <Testimonials />
        </section>

        {/* Services Section */}
        <section id="services" className="relative w-full">
          <SolarHeaterSection />
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative w-full">
          <ContactSection />
        </section>

        <FAQ />
        <Footer />
      </div>
    </main>
  );
}
