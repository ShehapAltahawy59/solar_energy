"use client";

import Image from "next/image";
import Link from "next/link";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import clsx from "clsx";
import animStyles from "@/app/styles_shared/animations.module.css";
import type { Dictionary, Locale } from "../../lib/dictionaries";

interface ProjectsShowcaseClientProps {
  dictionary: Dictionary;
  locale: Locale;
}

export default function ProjectsShowcaseClient({
  dictionary,
  locale,
}: ProjectsShowcaseClientProps) {
  console.log("ProjectsShowcaseClient locale:", locale); // Debug log
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section ref={elementRef} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            className={clsx(
              "text-3xl font-bold text-gray-800 mb-4",
              animStyles.animated,
              isVisible && animStyles.fadeInScale,
              locale === "ar" ? "text-right" : "text-left"
            )}
          >
            {dictionary.projects.title}
          </h2>
          <p
            className={clsx(
              "text-gray-600",
              animStyles.animated,
              isVisible && animStyles.fadeInScale,
              "delay-200"
            )}
          >
            {dictionary.projects.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dictionary.projects.showcase.map((project, index) => (
            <div
              key={project.id}
              className={clsx(
                "bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300",
                "transform hover:scale-105 hover:-translate-y-2 group cursor-pointer",
                animStyles.animated,
                isVisible && animStyles.slideInUp,
                `delay-${(index + 1) * 200}`
              )}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-green-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-1 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2 flex-shrink-0"></span>
                  <span className="font-medium">
                    {dictionary.projects.fields.location}:
                  </span>
                  <span className="ml-1">{project.location}</span>
                </p>
                <p className="text-gray-600 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 flex-shrink-0"></span>
                  <span className="font-medium">
                    {dictionary.projects.fields.capacity}:
                  </span>
                  <span className="ml-1 text-blue-600 font-semibold">
                    {project.capacity}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href={`/${locale}/projects`}
            className={clsx(
              "bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-500 transition-all duration-300 inline-block",
              "transform hover:scale-105 hover:shadow-lg",
              animStyles.animated,
              isVisible && animStyles.fadeInScale,
              "delay-800"
            )}
          >
            {dictionary.projects.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
}
