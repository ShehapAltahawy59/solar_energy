"use client";

import Image from "next/image";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import animStyles from "@/app/styles_shared/animations.module.css";
import clsx from "clsx";

export default function SolarHeaterSection() {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section
      ref={elementRef}
      className="py-16 bg-gradient-to-b from-blue-100/90 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2
              className={clsx(
                "text-4xl font-bold text-gray-800 mb-6",
                animStyles.animated,
                isVisible && animStyles.slideInRight
              )}
            >
              أنظمة الطاقة الشمسية المتكاملة
            </h2>
            <p
              className={clsx(
                "text-lg text-gray-600 mb-8",
                animStyles.animated,
                isVisible && animStyles.slideInRight,
                "delay-200"
              )}
            >
              نعمل في جميع منتجات الطاقة من ألواح وشاسيهات وإنفرترات وألواح
              حمايات. نقدم دراسة متخصصة لكل محطة حسب احتياجاتها في القطاعات
              الزراعية والصناعية والسكنية.
            </p>

            <div className={clsx("space-y-8", "relative")}>
              <div
                className={clsx(
                  "flex items-center gap-3",
                  "opacity-0",
                  animStyles.animated,
                  isVisible && [animStyles.slideInRight, "opacity-100"],
                  "transition-all duration-700",
                  "delay-300"
                )}
              >
                <div className="w-12 h-12 rounded-full bg-green-100/80 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">دراسة متخصصة</h3>
                  <p className="text-gray-600">
                    دراسة جدوى كاملة للمكان وموقع المحطة لتحديد الأنواع والقدرات
                    المناسبة
                  </p>
                </div>
              </div>

              <div
                className={clsx(
                  "flex items-center gap-3",
                  "opacity-0",
                  animStyles.animated,
                  isVisible && [animStyles.slideInRight, "opacity-100"],
                  "transition-all duration-700",
                  "delay-1000"
                )}
              >
                <div className="w-12 h-12 rounded-full bg-green-100/80 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-2xl">🔧</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">خدمة متكاملة</h3>
                  <p className="text-gray-600">
                    توريد وتركيب وصيانة دورية للمحطات
                  </p>
                </div>
              </div>

              <div
                className={clsx(
                  "flex items-center gap-3",
                  "opacity-0",
                  animStyles.animated,
                  isVisible && [animStyles.slideInRight, "opacity-100"],
                  "transition-all duration-700",
                  "delay-[1700ms]"
                )}
              >
                <div className="w-12 h-12 rounded-full bg-green-100/80 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-2xl">👥</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">فريق متخصص</h3>
                  <p className="text-gray-600">
                    فريق من المهندسين والفنيين بخبرة واسعة في مجال الطاقة
                    الشمسية
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div
            className={clsx(
              "relative h-[500px]",
              animStyles.animated,
              isVisible && animStyles.fadeInScale,
              "delay-400"
            )}
          >
            <Image
              src="/images/equipment/control_unit_2.jpg"
              alt="محطة طاقة شمسية"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
