"use client";

import Image from "next/image";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import clsx from "clsx";
import animStyles from "@/app/styles_shared/animations.module.css";
import type { Dictionary } from "../../lib/dictionaries";

interface TestimonialsClientProps {
  dictionary: Dictionary;
}

export default function TestimonialsClient({
  dictionary,
}: TestimonialsClientProps) {
  const { elementRef, isVisible } = useIntersectionObserver();

  const testimonials = [
    {
      name: dictionary.testimonials.engineers.ahmed.name,
      role: dictionary.testimonials.engineers.ahmed.role,
      quote: dictionary.testimonials.engineers.ahmed.quote,
      image: "/images/team/mostafa.jpg",
    },
    {
      name: dictionary.testimonials.engineers.mohamed.name,
      role: dictionary.testimonials.engineers.mohamed.role,
      quote: dictionary.testimonials.engineers.mohamed.quote,
      image: "/images/team/mahmoud.jpg",
    },
    {
      name: dictionary.testimonials.engineers.omar.name,
      role: dictionary.testimonials.engineers.omar.role,
      quote: dictionary.testimonials.engineers.omar.quote,
      image: "/images/team/ibrahem.jpg",
    },
  ];

  return (
    <section
      ref={elementRef}
      className="py-16 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            className={clsx(
              "text-3xl font-bold text-gray-800 mb-4",
              animStyles.animated,
              isVisible && animStyles.fadeInScale
            )}
          >
            {dictionary.testimonials.title}
          </h2>
          <p
            className={clsx(
              "text-gray-600",
              animStyles.animated,
              isVisible && animStyles.fadeInScale,
              "delay-200"
            )}
          >
            {dictionary.testimonials.subtitle}
          </p>
        </div>

        {/* All Engineers - Large Hero Style Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={clsx(
                "relative h-96 md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl group",
                animStyles.animated,
                isVisible && animStyles.fadeInScale,
                `delay-${(index + 1) * 200}`
              )}
            >
              <Image
                src={testimonial.image}
                alt={`${testimonial.name} - ${testimonial.role}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 lg:bottom-6 lg:left-6 lg:right-6 text-white">
                <h3 className="text-xl md:text-2xl lg:text-xl xl:text-2xl font-bold mb-2 lg:mb-3">
                  {testimonial.name}
                </h3>
                <p className="text-sm md:text-lg lg:text-sm xl:text-base mb-2 text-green-300 font-semibold">
                  {testimonial.role}
                </p>
                <p className="text-sm md:text-base lg:text-xs xl:text-sm italic opacity-90 leading-relaxed line-clamp-3">
                  "{testimonial.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
