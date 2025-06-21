"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import clsx from "clsx";
import animStyles from "@/app/styles_shared/animations.module.css";
import type { Dictionary } from "../../lib/dictionaries";

interface AboutSectionClientProps {
  dictionary: Dictionary;
}

export default function AboutSectionClient({
  dictionary,
}: AboutSectionClientProps) {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section
      ref={elementRef}
      className="py-16 bg-gradient-to-b from-white to-green-50"
      id="about"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className={clsx(
              "text-4xl font-bold text-gray-800 mb-6",
              animStyles.animated,
              isVisible && animStyles.fadeInScale
            )}
          >
            {dictionary.about.title}
          </h2>
          <p
            className={clsx(
              "text-lg text-gray-600 mb-8",
              animStyles.animated,
              isVisible && animStyles.fadeInScale,
              "delay-200"
            )}
          >
            {dictionary.about.description}
          </p>
          <div
            className={clsx(
              "grid grid-cols-1 md:grid-cols-3 gap-8",
              animStyles.animated,
              isVisible && animStyles.fadeInScale,
              "delay-300"
            )}
          >
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group cursor-pointer relative">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-2xl text-white">👁️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                {dictionary.about.vision.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                {dictionary.about.vision.description}
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-xl"></div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group cursor-pointer relative">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-2xl text-white">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                {dictionary.about.mission.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                {dictionary.about.mission.description}
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-xl"></div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group cursor-pointer relative">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-2xl text-white">⭐</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                {dictionary.about.values.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                {dictionary.about.values.description}
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
