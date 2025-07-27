import ProjectCard from "@/components/ProjectCard";
import clsx from "clsx";
import animStyles from "@/app/styles_shared/animations.module.css";
import Image from "next/image";
import { getDictionary, type Locale } from "../../../../lib/dictionaries";

// Projects data is now loaded from dictionary

interface PageProps {
  params: Promise<{ lang: Locale }>;
}

export function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'ar' }
  ];
}

export default async function ProjectsPage({ params }: PageProps) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang);
  const isRTL = resolvedParams.lang === "ar";

  return (
    <main
      className={`min-h-screen bg-gradient-to-b from-green-50 to-white w-full overflow-x-hidden ${
        isRTL ? "rtl" : "ltr"
      }`}
    >
      <div className="container mx-auto px-4 max-w-[100vw] pt-24 md:pt-20">
        <div className={`mb-12 ${isRTL ? "text-right" : "text-left"}`}>
          <h1
            className={clsx(
              "text-3xl md:text-4xl font-bold text-gray-800",
              animStyles.animated,
              "animate-fade-in" // Always visible
            )}
          >
            {dict.projects.title}
          </h1>
          <p
            className={clsx(
              "mt-4 text-base md:text-lg text-gray-600",
              animStyles.animated,
              "animate-slide-in" // Always visible
            )}
          >
            {dict.projects.subtitle}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="w-full">
          <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[...dict.projects.showcase, ...dict.projects.completed].map(
              (project, index) => (
                <div
                  key={project.id}
                  className={clsx(
                    "bg-white rounded-lg shadow-lg overflow-hidden",
                    "transform transition-all duration-500 ease-in-out",
                    "hover:shadow-2xl hover:-translate-y-2 hover:bg-green-50",
                    "cursor-pointer group",
                    "relative w-full",
                    animStyles.animated,
                    animStyles.slideInUp,
                    `delay-${index * 100}`
                  )}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                  </div>
                  <div className="p-4 md:p-6 transform transition-transform duration-500 group-hover:translate-x-1">
                    <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800 group-hover:text-green-700">
                      {project.title}
                    </h3>
                    <div className="text-sm md:text-base text-gray-600 mb-4">
                      <p className="mb-1 flex items-center gap-2">
                        <span className="text-green-600">📍</span>
                        {project.location}
                      </p>
                      {project.capacity && (
                        <p className="flex items-center gap-2">
                          <span className="text-green-600">⚡</span>
                          {project.capacity}
                        </p>
                      )}
                      {project.client && (
                        <p className="flex items-center gap-2">
                          <span className="text-green-600">👤</span>
                          {project.client}
                        </p>
                      )}
                      {(project as any).type && (
                        <p className="flex items-center gap-2">
                          <span className="text-green-600">🔧</span>
                          {(project as any).type}
                        </p>
                      )}
                    </div>
                    <p className="text-sm md:text-base text-gray-700 group-hover:text-gray-900">
                      {project.description}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              )
            )}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:gap-8 rounded-2xl bg-white p-6 md:p-8 shadow-lg md:grid-cols-2 lg:grid-cols-4 w-full">
          <div
            className={clsx(
              "text-center",
              animStyles.animated,
              animStyles.slideInUp,
              "delay-100"
            )}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-green-600">
              +120
            </h3>
            <p className="mt-2 text-sm md:text-base text-gray-600">
              {dict.projects.stats.projects}
            </p>
          </div>
          <div
            className={clsx(
              "text-center",
              animStyles.animated,
              animStyles.slideInUp,
              "delay-200"
            )}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-green-600">
              45
            </h3>
            <p className="mt-2 text-sm md:text-base text-gray-600">
              {dict.projects.stats.capacity}
            </p>
          </div>
          <div
            className={clsx(
              "text-center",
              animStyles.animated,
              animStyles.slideInUp,
              "delay-300"
            )}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-green-600">
              10
            </h3>
            <p className="mt-2 text-sm md:text-base text-gray-600">
              {dict.projects.stats.warranty}
            </p>
          </div>
          <div
            className={clsx(
              "text-center",
              animStyles.animated,
              animStyles.slideInUp,
              "delay-400"
            )}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-green-600">
              98%
            </h3>
            <p className="mt-2 text-sm md:text-base text-gray-600">
              {dict.projects.stats.satisfaction}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
