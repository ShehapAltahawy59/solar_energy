"use client";

import { useState } from "react";
import { useDictionary } from "@/hooks/use-dictionary";
import { useLanguage } from "@/hooks/use-language";

export default function FAQ() {
  const { locale } = useLanguage();
  const { dictionary, loading } = useDictionary(locale);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (loading || !dictionary) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="h-10 bg-gray-200 animate-pulse rounded mb-4"></div>
              <div className="h-6 bg-gray-200 animate-pulse rounded"></div>
            </div>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="bg-white rounded-lg shadow-sm p-6">
                  <div className="h-6 bg-gray-200 animate-pulse rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 animate-pulse rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  const faqItems = [
    {
      question: dictionary.faq.questions.q1.question,
      answer: dictionary.faq.questions.q1.answer,
    },
    {
      question: dictionary.faq.questions.q2.question,
      answer: dictionary.faq.questions.q2.answer,
    },
    {
      question: dictionary.faq.questions.q3.question,
      answer: dictionary.faq.questions.q3.answer,
    },
    {
      question: dictionary.faq.questions.q4.question,
      answer: dictionary.faq.questions.q4.answer,
    },
    {
      question: dictionary.faq.questions.q5.question,
      answer: dictionary.faq.questions.q5.answer,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {dictionary.faq.title}
            </h2>
            <p className="text-gray-600">{dictionary.faq.subtitle}</p>
          </div>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-right hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium text-gray-800">
                      {item.question}
                    </span>
                    <span className="text-green-600 text-xl">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 text-right">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
