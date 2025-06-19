"use client";

import { useState } from "react";

const faqs = [
  {
    question: "ما هي مميزات الطاقة الشمسية؟",
    answer:
      "الطاقة الشمسية نظيفة ومتجددة وتوفر الكثير من تكاليف الكهرباء. كما أنها تحافظ على البيئة وتقلل من البصمة الكربونية.",
  },
  {
    question: "كم يستغرق تركيب نظام الطاقة الشمسية؟",
    answer:
      "يعتمد وقت التركيب على حجم المشروع. عادةً ما يستغرق من 3 إلى 7 أيام للمنازل، وقد يستغرق وقتاً أطول للمشاريع الكبيرة.",
  },
  {
    question: "هل أحتاج إلى صيانة دورية للنظام؟",
    answer:
      "نعم، نوصي بإجراء صيانة دورية كل 6 أشهر لضمان كفاءة النظام. نقدم خدمة صيانة شاملة لجميع عملائنا.",
  },
  {
    question: "ما هي مدة ضمان الألواح الشمسية؟",
    answer:
      "نقدم ضمان لمدة 10 سنوات على المكونات و25 سنة على إنتاجية الألواح الشمسية.",
  },
  {
    question: "كيف يمكنني معرفة التكلفة المتوقعة للمشروع؟",
    answer:
      "نقدم استشارة مجانية وتقييم للموقع لتحديد احتياجاتك وتقديم عرض سعر مفصل يناسب ميزانيتك.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          الأسئلة الشائعة
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full text-right px-6 py-4 bg-white hover:bg-gray-50 flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-lg">{faq.question}</span>
                <span
                  className={`transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              <div
                className={`px-6 transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-40 py-4" : "max-h-0"
                } overflow-hidden bg-gray-50`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
