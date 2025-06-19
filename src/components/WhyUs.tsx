"use client";
import Image from "next/image";
import { companyValues, companyServices, companyInfo } from "@/app/data";
import styles from "@/app/styles_shared/card.module.css";
import animStyles from "@/app/styles_shared/animations.module.css";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useCountUp } from "@/hooks/useCountUp";
import clsx from "clsx";

const stats = [
  { label: "عميل سعيد", value: 500 },
  { label: "مشروع منفذ", value: 150 },
  { label: "ميجاوات منتجة", value: 75 },
  { label: "طن ثاني أكسيد كربون موفر", value: 1000 },
];

const visualFeatures = [
  {
    image: "/images/equipment/control_unit.jpg",
    title: "معدات عالية الجودة",
    description:
      "نستخدم أفضل المعدات والألواح الشمسية من أشهر الشركات العالمية",
  },
  {
    image: "/images/team/team_group_photo.jpg",
    title: "فريق متخصص",
    description: `فريق من المهندسين والفنيين ذوي الخبرة في مجال الطاقة الشمسية بقيادة ${companyInfo.leadEngineer}`,
  },
  {
    image: "/images/setup/panels_setup_down_view.jpg",
    title: "تركيب احترافي",
    description: "نقدم خدمة تركيب احترافية وضمان على جميع أعمالنا",
  },
];

export default function WhyUs() {
  const { elementRef: sectionRef, isVisible: isSectionVisible } =
    useIntersectionObserver();
  const { elementRef: servicesRef, isVisible: isServicesVisible } =
    useIntersectionObserver();
  const { elementRef: visualRef, isVisible: isVisualVisible } =
    useIntersectionObserver();
  const { elementRef: statsRef, isVisible: isStatsVisible } =
    useIntersectionObserver();

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="container mx-auto px-4">
        {/* Main Title */}
        <div
          className={clsx(
            "text-center mb-16",
            animStyles.animated,
            isSectionVisible && animStyles.fadeInScale
          )}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            لماذا تختار الرحاب للطاقة الشمسية؟
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            نحن نقدم حلولاً متكاملة ومبتكرة في مجال الطاقة الشمسية
          </p>
          <p className="text-md text-gray-500">
            تأسست عام {companyInfo.establishedYear} - س.ت:{" "}
            {companyInfo.registrationNumber} - ب.ض: {companyInfo.taxNumber}
          </p>
        </div>

        {/* Visual Features Section */}
        <div className="mb-24">
          <h3
            className={clsx(
              "text-3xl font-bold text-gray-800 text-center mb-12",
              animStyles.animated,
              isVisualVisible && animStyles.fadeInScale
            )}
          >
            مميزاتنا
          </h3>
          <div
            ref={visualRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {visualFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className={clsx(
                  "relative group overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl",
                  animStyles.animated,
                  isVisualVisible && animStyles.slideInRight,
                  `delay-${(index + 1) * 200}`
                )}
              >
                <div className="relative h-80">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
                <div className="absolute bottom-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-200">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-24">
          <h3
            className={clsx(
              "text-3xl font-bold text-gray-800 text-center mb-12",
              animStyles.animated,
              isServicesVisible && animStyles.fadeInScale
            )}
          >
            خدماتنا
          </h3>
          <div
            ref={servicesRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {companyServices.map((service, index) => (
              <div
                key={service.title}
                className={clsx(
                  styles.card,
                  styles.featureCard,
                  "cursor-pointer",
                  "transition-all duration-500 ease-in-out",
                  "hover:shadow-2xl hover:-translate-y-2 hover:bg-green-50",
                  "transform hover:scale-[1.02]",
                  "relative group",
                  animStyles.animated,
                  isServicesVisible &&
                    (index % 2 === 0
                      ? animStyles.slideInLeft
                      : animStyles.slideInRight),
                  `delay-${(index + 1) * 100}`
                )}
              >
                <div className="transform transition-transform duration-500 group-hover:translate-x-1">
                  {service.icon && (
                    <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform duration-500">
                      {service.icon}
                    </span>
                  )}
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-green-700">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700">
                    {service.description}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Values Section */}
        <div className="mb-24">
          <h3
            className={clsx(
              "text-3xl font-bold text-gray-800 text-center mb-12",
              animStyles.animated,
              isSectionVisible && animStyles.fadeInScale
            )}
          >
            قيم الشركة
          </h3>
          <div className="flex flex-row gap-4">
            {companyValues.map((value, index) => (
              <div
                key={value.title}
                className={clsx(
                  styles.card,
                  styles.featureCard,
                  animStyles.animated,
                  isSectionVisible &&
                    (index % 2 === 0
                      ? animStyles.slideInLeft
                      : animStyles.slideInRight),
                  `delay-${(index + 1) * 100}`
                )}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const count = useCountUp({
              end: stat.value,
              isVisible: isStatsVisible,
              delay: index * 100,
            });

            return (
              <div
                key={stat.label}
                className={clsx(
                  "text-center",
                  animStyles.animated,
                  isStatsVisible && animStyles.slideInUp,
                  `delay-${(index + 1) * 100}`
                )}
              >
                <div className="text-4xl font-bold text-green-600 mb-2">
                  {count}+
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
