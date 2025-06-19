"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import clsx from "clsx";
import animStyles from "@/app/styles_shared/animations.module.css";

export default function AboutSection() {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section
      ref={elementRef}
      className="py-16 bg-gradient-to-b from-white to-green-50"
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
            من نحن
          </h2>
          <p
            className={clsx(
              "text-lg text-gray-600 mb-8",
              animStyles.animated,
              isVisible && animStyles.fadeInScale,
              "delay-200"
            )}
          >
            نحن شركة رائدة في مجال الطاقة المتجددة، متخصصون في تصميم وتركيب
            وصيانة أنظمة الطاقة الشمسية. نمتلك خبرة واسعة تمتد لسنوات في تنفيذ
            مشاريع الطاقة المتجددة في مختلف القطاعات.
          </p>
          <div
            className={clsx(
              "grid grid-cols-1 md:grid-cols-3 gap-8",
              animStyles.animated,
              isVisible && animStyles.fadeInScale,
              "delay-300"
            )}
          >
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                رؤيتنا
              </h3>
              <p className="text-gray-600">
                أن نكون الشريك الموثوق به في التحول نحو الطاقة النظيفة
                والمستدامة
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                مهمتنا
              </h3>
              <p className="text-gray-600">
                تقديم حلول طاقة مبتكرة وفعالة تلبي احتياجات عملائنا وتحافظ على
                البيئة
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                قيمنا
              </h3>
              <p className="text-gray-600">
                الجودة، الابتكار، الاستدامة، والالتزام بخدمة العملاء
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
