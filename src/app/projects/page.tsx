"use client";

import ProjectCard from "@/components/ProjectCard";
import clsx from "clsx";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import animStyles from "@/app/styles_shared/animations.module.css";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

// Real projects data
const projects = [
  {
    id: "1",
    title: "محطة طاقة شمسية في الفرافرة",
    location: "الفرافرة",
    capacity: "150 كيلو وات",
    imageUrl: "/images/projects/agriculture/project_agriculture_1.jpg",
    description: "محطة طاقة شمسية للأستاذ عماد فرفور والاستاذ علاء الضبع",
    client: "عماد فرفور وعلاء الضبع",
  },
  {
    id: "2",
    title: "محطة طاقة شمسية للدواجن",
    location: "امتداد طريق ابناء الغربيه",
    capacity: "125 حصان",
    imageUrl: "/images/projects/agriculture/project_agriculture_2.jpg",
    description: "محطة بجوار الوطنية للدواجن للعمده بسيوني",
    client: "العمده بسيوني",
  },
  {
    id: "3",
    title: "محطة طاقة شمسية في الضبعه",
    location: "الضبعه",
    capacity: "107 كيلو وات",
    imageUrl: "/images/projects/agriculture/project_agriculture_3.jpg",
    description: "محطة طاقة شمسية للأستاذه عاشور الديب",
    client: "عاشور الديب",
  },
  {
    id: "4",
    title: "محطة طاقة شمسية في العلمين",
    location: "مدخل شجاعه طريق العلمين",
    capacity: "60 كيلو وات",
    imageUrl: "/images/projects/agriculture/project_agriculture_4.jpg",
    description: "محطة طاقة شمسية للأستاذ احمد عبد الرحمن (شركه القائد)",
    client: "احمد عبد الرحمن - شركه القائد",
  },
  {
    id: "5",
    title: "محطة طاقة شمسية في البحيره",
    location: "منطقه الروابي الخضر - البحيره",
    capacity: "50 كيلو وات",
    imageUrl: "/images/projects/agriculture/project_agriculture_5.jpg",
    description: "محطة طاقة شمسية للأستاذ طارق البلتاجي",
    client: "طارق البلتاجي",
  },
  {
    id: "6",
    title: "محطة طاقة شمسية لمصنع المراعي",
    location: "طريق مصر اسكندريه الزراعي - محافظه الغربيه",
    capacity: "100 كيلو وات",
    imageUrl:
      "/images/projects/agriculture/project_agriculture_1_anotherview.jpg",
    description: "محطة طاقة شمسية لمصنع الأستاذ احمد عايد (مصنع المراعي)",
    client: "احمد عايد - مصنع المراعي",
  },
  {
    id: "7",
    title: "محطة طاقة شمسية متحركة",
    location: "مدينه السادات - محافظه المنوفيه",
    capacity: "180 كيلو وات",
    imageUrl: "/images/projects/wells/project_well_1.jpg",
    description: "محطة طاقة شمسية متحركة",
    type: "متحركة",
  },
  {
    id: "8",
    title: "محطة طاقة شمسية - مزرعه نبع البركه",
    location: "طريق وادي النطرون العلمين",
    capacity: "90 كيلو وات",
    imageUrl: "/images/projects/wells/project_well_2_during_sunset.jpg",
    description: "محطة طاقة شمسية لمزرعه نبع البركه",
  },
  {
    id: "9",
    title: "محطة طاقة شمسية متحركة في العلمين",
    location: "مدينه العلمين",
    capacity: "25 كيلو وات",
    imageUrl: "/images/projects/wells/project_well_3_front_view.jpg",
    description: "محطة طاقة شمسية متحركة للأستاذ حسن عبد العليم",
    client: "حسن عبد العليم",
    type: "متحركة",
  },
  {
    id: "10",
    title: "محطة طاقة شمسية في سيناء",
    location: "سيناء - بئر العبد",
    imageUrl: "/images/projects/wells/project_well_4.jpg",
    description: "محطة طاقة شمسية للأستاذ سيد الشبراوي",
    client: "سيد الشبراوي",
  },
  {
    id: "11",
    title: "محطة طاقة شمسية في مطروح",
    location: "مطروح",
    imageUrl: "/images/projects/residential/project_residential_1.jpg",
    description: "محطة طاقة شمسية للأستاذ بويد",
  },
  {
    id: "12",
    title: "محطة طاقة شمسية في مطروح",
    location: "مطروح",
    imageUrl: "/images/projects/residential/project_residential_2.jpg",
    description: "محطة طاقة شمسية للأستاذ عطيوة الفقي",
    client: "عطيوة الفقي",
  },
  {
    id: "13",
    title: "محطة طاقة شمسية في وادي النطرون",
    location: "البحيره - وادي النطرون - المجابرة",
    capacity: "105.5 كيلو وات",
    imageUrl: "/images/projects/wells/project_well_3_back_view.jpg",
    description: "محطة طاقة شمسية بجوار شركه الوطنيه للدواجن",
    expectedDate: "ابريل 2025",
  },
  {
    id: "14",
    title: "محطة طاقة شمسية لمصنع في كفر الزيات",
    location: "كفر الزيات",
    capacity: "75 كيلو وات",
    imageUrl: "/images/projects/agriculture/project_agriculture_5.jpg",
    description: "محطة طاقة شمسية اون جريد للأستاذ طلعت شومان",
    client: "طلعت شومان",
    expectedDate: "مايو 2024",
    type: "اون جريد",
  },
];

export default function ProjectsPage() {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0,
    rootMargin: "0px",
  });
  const router = useRouter();

  // Reset scroll position when navigating to this page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white w-full overflow-x-hidden">
      <div className="container mx-auto px-4 max-w-[100vw] pt-24 md:pt-20">
        <div className="mb-12 text-right">
          <h1
            className={clsx(
              "text-3xl md:text-4xl font-bold text-gray-800",
              animStyles.animated,
              "animate-fade-in" // Always visible
            )}
          >
            مشروعاتنا
          </h1>
          <p
            className={clsx(
              "mt-4 text-base md:text-lg text-gray-600",
              animStyles.animated,
              "animate-slide-in" // Always visible
            )}
          >
            اكتشف مشروعاتنا الناجحة في مجال الطاقة الشمسية
          </p>
        </div>

        {/* Projects Grid */}
        <div ref={elementRef} className="w-full">
          <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={clsx(
                  "bg-white rounded-lg shadow-lg overflow-hidden",
                  "transform transition-all duration-500 ease-in-out",
                  "hover:shadow-2xl hover:-translate-y-2 hover:bg-green-50",
                  "cursor-pointer group",
                  "relative w-full",
                  animStyles.animated,
                  isVisible ? animStyles.slideInUp : "opacity-0",
                  `delay-${index * 100}`
                )}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.imageUrl}
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
                    {project.type && (
                      <p className="flex items-center gap-2">
                        <span className="text-green-600">🔧</span>
                        {project.type}
                      </p>
                    )}
                  </div>
                  <p className="text-sm md:text-base text-gray-700 group-hover:text-gray-900">
                    {project.description}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:gap-8 rounded-2xl bg-white p-6 md:p-8 shadow-lg md:grid-cols-2 lg:grid-cols-4 w-full">
          <div
            className={clsx(
              "text-center",
              animStyles.animated,
              isVisible ? animStyles.slideInUp : "opacity-0",
              "delay-100"
            )}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-green-600">
              +120
            </h3>
            <p className="mt-2 text-sm md:text-base text-gray-600">
              مشروعًا ناجحًا
            </p>
          </div>
          <div
            className={clsx(
              "text-center",
              animStyles.animated,
              isVisible ? animStyles.slideInUp : "opacity-0",
              "delay-200"
            )}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-green-600">
              45
            </h3>
            <p className="mt-2 text-sm md:text-base text-gray-600">
              ميجاوات قدرة مركبة
            </p>
          </div>
          <div
            className={clsx(
              "text-center",
              animStyles.animated,
              isVisible ? animStyles.slideInUp : "opacity-0",
              "delay-300"
            )}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-green-600">
              10
            </h3>
            <p className="mt-2 text-sm md:text-base text-gray-600">
              سنوات ضمان
            </p>
          </div>
          <div
            className={clsx(
              "text-center",
              animStyles.animated,
              isVisible ? animStyles.slideInUp : "opacity-0",
              "delay-400"
            )}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-green-600">
              98%
            </h3>
            <p className="mt-2 text-sm md:text-base text-gray-600">
              رضا العملاء
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
