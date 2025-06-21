"use client";

import Image from "next/image";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import clsx from "clsx";
import animStyles from "@/app/styles_shared/animations.module.css";
import type { Dictionary } from "../../lib/dictionaries";

interface SolarHeaterSectionClientProps {
  dictionary: Dictionary;
}

export default function SolarHeaterSectionClient({
  dictionary,
}: SolarHeaterSectionClientProps) {
  const { elementRef, isVisible } = useIntersectionObserver();

  const services = [
    {
      title: dictionary.solarSystem.specializedStudy.title,
      description: dictionary.solarSystem.specializedStudy.description,
    },
    {
      title: dictionary.solarSystem.integratedService.title,
      description: dictionary.solarSystem.integratedService.description,
    },
    {
      title: dictionary.solarSystem.specializedTeam.title,
      description: dictionary.solarSystem.specializedTeam.description,
    },
  ];

  return (
    <section
      ref={elementRef}
      id="services"
      className="py-16 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className={clsx(
              "text-4xl font-bold text-gray-800 mb-4",
              animStyles.animated,
              isVisible && animStyles.fadeInScale
            )}
          >
            {dictionary.solarSystem.title}
          </h2>
          <p
            className={clsx(
              "text-lg text-gray-600 max-w-3xl mx-auto",
              animStyles.animated,
              isVisible && animStyles.fadeInScale,
              "delay-200"
            )}
          >
            {dictionary.solarSystem.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={clsx(
                  "bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300",
                  "transform hover:scale-105 hover:-translate-y-2 group cursor-pointer relative",
                  animStyles.animated,
                  isVisible && animStyles.slideInLeft,
                  `delay-${(index + 1) * 200}`
                )}
              >
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-green-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <span className="text-2xl text-white">
                      {index === 0 ? "📊" : index === 1 ? "🔧" : "👥"}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                  {service.description}
                </p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-lg"></div>
              </div>
            ))}
          </div>

          <div
            className={clsx(
              "relative",
              animStyles.animated,
              isVisible && animStyles.slideInRight,
              "delay-600"
            )}
          >
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg group">
              <Image
                src="/images/equipment/panels_cloese_view.jpg"
                alt={dictionary.solarSystem.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent group-hover:from-black/20 transition-all duration-300" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    {dictionary.solarSystem.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {dictionary.whyUs.equipmentQuality.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
