"use client";
import Image from "next/image";
import Link from "next/link";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import animStyles from "@/app/styles_shared/animations.module.css";
import clsx from "clsx";

export default function HeroSection() {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <div ref={elementRef} className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/projects/agriculture/project_agriculture_4.jpg"
          alt="Solar panels background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1
            className={clsx(
              "text-5xl md:text-6xl font-bold text-white mb-6",
              animStyles.animated,
              isVisible && animStyles.fadeInScale
            )}
          >
            حلول الطاقة الشمسية المتكاملة
          </h1>

          <p
            className={clsx(
              "text-xl text-gray-200 mb-8",
              animStyles.animated,
              isVisible && animStyles.slideInLeft,
              "delay-200"
            )}
          >
            نقدم حلولاً مبتكرة وصديقة للبيئة لتوليد الطاقة الشمسية للمنازل
            والشركات والمزارع
          </p>

          <div
            className={clsx(
              "space-x-4 space-x-reverse",
              animStyles.animated,
              isVisible && animStyles.slideInUp,
              "delay-400"
            )}
          >
            <a
              href="https://wa.me/201090006997"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              تواصل معنا
            </a>
            <Link
              href="/projects"
              className="inline-block bg-white/10 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              مشروعاتنا
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
