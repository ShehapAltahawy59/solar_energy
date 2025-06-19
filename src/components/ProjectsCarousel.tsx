"use client";

import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import animStyles from "@/app/styles_shared/animations.module.css";
import clsx from "clsx";

interface Project {
  id: string;
  title: string;
  location: string;
  capacity: string;
  imageUrl: string;
  description: string;
}

interface ProjectsCarouselProps {
  projects: Project[];
}

export default function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { elementRef, isVisible } = useIntersectionObserver();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [projects.length]);

  const getAnimationClass = (index: number) => {
    switch (index % 3) {
      case 0:
        return animStyles.slideInLeft;
      case 1:
        return animStyles.slideInRight;
      case 2:
        return animStyles.slideInUp;
      default:
        return animStyles.slideInLeft;
    }
  };

  return (
    <section className="w-full bg-gradient-to-b from-green-50 to-white py-16">
      <div className="container mx-auto px-4" ref={elementRef}>
        <h2
          className={clsx(
            "mb-8 text-right text-3xl font-bold text-gray-800",
            animStyles.animated,
            isVisible && animStyles.fadeInScale
          )}
        >
          مشروعاتنا المميزة
        </h2>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title + index}
                className={clsx(
                  "bg-white rounded-lg shadow-lg p-6",
                  "cursor-pointer",
                  "transition-all duration-500 ease-in-out",
                  "hover:shadow-2xl hover:-translate-y-2 hover:bg-green-50",
                  "transform hover:scale-[1.02]",
                  "relative group",
                  animStyles.animated,
                  isVisible && getAnimationClass(index),
                  `delay-${(index % 3) * 200}`
                )}
              >
                {project.imageUrl && (
                  <div className="relative h-48 w-full mb-4 overflow-hidden rounded-lg">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className={clsx(
                        "w-full h-full object-cover",
                        "transition-transform duration-500 ease-in-out",
                        "group-hover:scale-110"
                      )}
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                  </div>
                )}
                <div className="transform transition-transform duration-500 group-hover:translate-x-1">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-green-700">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700">
                    {project.description}
                  </p>
                  {project.capacity && (
                    <p className="text-green-600 mt-2 group-hover:text-green-700">
                      القدرة: {project.capacity}
                    </p>
                  )}
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/projects"
            className={clsx(
              "inline-block bg-green-600 text-white px-6 py-3 rounded-lg",
              "hover:bg-green-700 transition-colors duration-300",
              animStyles.animated,
              isVisible && animStyles.fadeInScale,
              "delay-600"
            )}
          >
            عرض جميع المشاريع
          </Link>
        </div>
      </div>
    </section>
  );
}
