"use client";
import Image from "next/image";
import clsx from "clsx";

const testimonials = [
  {
    id: 1,
    name: "م. أحمد محمد",
    role: "مدير مشروع",
    image: "/images/team/team_during_setup_1.jpg",
    quote:
      "نفخر بتقديم أفضل الحلول المستدامة للطاقة الشمسية لعملائنا. نجاحنا يكمن في رضا عملائنا وثقتهم بنا.",
  },
  {
    id: 2,
    name: "م. محمد علي",
    role: "مهندس تركيبات",
    image: "/images/team/enginerr_during_setup_2.jpg",
    quote:
      "نحرص على تنفيذ المشاريع بأعلى معايير الجودة والسلامة، مع الالتزام بالمواعيد المحددة.",
  },
  {
    id: 3,
    name: "م. عمر خالد",
    role: "مهندس تصميم",
    image: "/images/team/enginerr_during_setup_3.jpg",
    quote:
      "نصمم أنظمة الطاقة الشمسية بعناية فائقة لتلبي احتياجات كل عميل وتحقق أقصى كفاءة ممكنة.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gradient-to-b from-green-300/80 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">فريقنا المتميز</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={clsx(
                "bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden",
                "cursor-pointer",
                "transition-all duration-500 ease-in-out",
                "hover:shadow-2xl hover:-translate-y-2 hover:bg-green-50",
                "transform hover:scale-[1.02]",
                "relative group"
              )}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className={clsx(
                    "object-cover",
                    "transition-transform duration-500 ease-in-out",
                    "group-hover:scale-110"
                  )}
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              </div>
              <div className="p-6 transform transition-transform duration-500 group-hover:translate-x-1">
                <p className="text-gray-600 mb-4 group-hover:text-gray-700">
                  {testimonial.quote}
                </p>
                <div className="text-right">
                  <h3 className="font-semibold text-lg text-gray-800 group-hover:text-green-700">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-500 group-hover:text-gray-600">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
