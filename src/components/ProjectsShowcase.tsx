"use client";

import { completedProjects } from "@/app/data";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import animStyles from "@/app/styles_shared/animations.module.css";
import clsx from "clsx";

interface Project {
  title: string;
  capacity?: string;
  location?: string;
  client?: string;
  type?: string;
  status?: string;
  imageUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectsShowcase() {
  const { elementRef, isVisible } = useIntersectionObserver();

  // Separate completed and in-progress projects
  const inProgressProjects = completedProjects.filter(
    (project) => project.status
  );
  const finishedProjects = completedProjects.filter(
    (project) => !project.status
  );

  return (
    <section className="py-16 bg-gradient-to-b from-green-200 to-white">
      <div className="container mx-auto px-4">
        <div
          className={clsx(
            "text-center mb-12",
            animStyles.animated,
            isVisible && animStyles.fadeInScale
          )}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            مشاريعنا المنفذة
          </h2>
          <p className="text-lg text-gray-600">
            نفخر بتنفيذ العديد من المشاريع الناجحة في مختلف أنحاء مصر
          </p>
        </div>

        {/* In Progress Projects */}
        {inProgressProjects.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              المشاريع قيد التنفيذ
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {inProgressProjects.map((project, index) => (
                <div
                  key={project.title}
                  className={clsx(
                    "bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border-2 border-green-500",
                    "transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-green-50",
                    animStyles.animated,
                    isVisible && animStyles.slideInUp,
                    `delay-${(index + 1) * 100}`
                  )}
                >
                  <div className="bg-green-500 text-white px-4 py-2 text-sm font-semibold">
                    {project.status}
                  </div>
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Completed Projects */}
        <div ref={elementRef}>
          {inProgressProjects.length > 0 && (
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              المشاريع المنجزة
            </h3>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {finishedProjects.map((project, index) => (
              <div
                key={project.title}
                className={clsx(
                  "bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden",
                  "transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-green-50",
                  animStyles.animated,
                  isVisible && animStyles.slideInUp,
                  `delay-${(index + 1) * 100}`
                )}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>

        <div
          className={clsx(
            "text-center mt-12",
            animStyles.animated,
            isVisible && animStyles.slideInUp,
            "delay-800"
          )}
        >
          <p className="text-gray-600">
            وغيرها الكثير من المشاريع الناجحة في مختلف محافظات مصر
          </p>
        </div>
      </div>
    </section>
  );
}

// ProjectCard component for reusability
function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div>
      {project.imageUrl && (
        <div className="relative h-48 w-full">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {project.title}
        </h3>
        <div className="space-y-2 text-gray-600">
          {project.capacity && (
            <p className="flex items-center gap-2">
              <span className="text-green-600">⚡</span>
              <span>القدرة: {project.capacity}</span>
            </p>
          )}
          {project.location && (
            <p className="flex items-center gap-2">
              <span className="text-green-600">📍</span>
              <span>الموقع: {project.location}</span>
            </p>
          )}
          {project.client && (
            <p className="flex items-center gap-2">
              <span className="text-green-600">👤</span>
              <span>العميل: {project.client}</span>
            </p>
          )}
          {project.type && (
            <p className="flex items-center gap-2">
              <span className="text-green-600">🏢</span>
              <span>النوع: {project.type}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
