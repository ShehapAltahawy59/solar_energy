import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import WhyUs from "@/components/WhyUs";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import SolarHeaterSection from "@/components/SolarHeaterSection";
import ContactSection from "@/components/ContactSection";
import AboutSection from "@/components/AboutSection";
import ContactButtons from "@/components/ContactButtons";
import { getDictionary, type Locale } from "../../../lib/dictionaries";

// Featured projects data is now loaded from dictionary

interface PageProps {
  params: Promise<{ lang: Locale }>;
}

export function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'ar' }
  ];
}

export default async function Home({ params }: PageProps) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang);
  const isRTL = resolvedParams.lang === "ar";

  return (
    <main
      className={`relative w-full overflow-x-hidden ${isRTL ? "rtl" : "ltr"}`}
    >
      <ContactButtons />
      {/* Hero Section Group - Everything that should be active under "الرئيسية" */}
      <div className="flex flex-col w-full">
        <section id="hero" className="relative w-full">
          <HeroSection dict={dict.hero} lang={resolvedParams.lang} />
          <ProjectsCarousel
            projects={dict.projects.showcase.map((project) => ({
              id: project.id.toString(),
              title: project.title,
              location: project.location,
              capacity: project.capacity,
              imageUrl: project.image,
              description: project.description || project.title,
              client: project.client,
            }))}
            locale={resolvedParams.lang}
          />
          <WhyUs locale={resolvedParams.lang} />
        </section>

        {/* About Section */}
        <section id="about" className="relative w-full">
          <AboutSection locale={resolvedParams.lang} />
          <Testimonials locale={resolvedParams.lang} />
        </section>

        {/* Services Section */}
        <section id="services" className="relative w-full">
          <SolarHeaterSection locale={resolvedParams.lang} />
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
