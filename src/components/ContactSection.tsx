"use client";

import { useState } from "react";
import { useDictionary } from "@/hooks/use-dictionary";
import { useLanguage } from "@/hooks/use-language";

export default function ContactSection() {
  const { locale } = useLanguage();
  const { dictionary, loading } = useDictionary(locale);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (loading || !dictionary) {
    return (
      <section id="contact" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="h-8 bg-gray-700 animate-pulse rounded mb-8"></div>
            <div className="h-6 bg-gray-700 animate-pulse rounded mb-12 max-w-2xl mx-auto"></div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-gray-700">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="h-20 bg-gray-700 animate-pulse rounded"></div>
                  <div className="h-20 bg-gray-700 animate-pulse rounded"></div>
                </div>
                <div className="h-20 bg-gray-700 animate-pulse rounded"></div>
                <div className="h-32 bg-gray-700 animate-pulse rounded"></div>
                <div className="text-center">
                  <div className="h-12 w-32 bg-gray-700 animate-pulse rounded mx-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            {dictionary.contact.title}
          </h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            {dictionary.contact.subtitle}
          </p>

          {/* Contact Information */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-gray-700 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Address */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span>📍</span> {dictionary.contact.address.title}
                </h3>
                <div className="flex items-start gap-3">
                  <p className="text-gray-300 flex-1">
                    {dictionary.contact.address.text}
                  </p>
                  <a
                    href={dictionary.contact.address.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:text-green-400 transition-colors"
                    title="Open in Google Maps"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Phone and Email */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                    <span>📞</span> {dictionary.contact.phone.title}
                  </h3>
                  <a
                    href={`tel:${dictionary.contact.phone.text}`}
                    className="text-gray-300 hover:text-green-500 transition-colors"
                  >
                    {dictionary.contact.phone.text}
                  </a>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                    <span>✉️</span> {dictionary.contact.email.title}
                  </h3>
                  <a
                    href={`mailto:${dictionary.contact.email.text}`}
                    className="text-gray-300 hover:text-green-500 transition-colors"
                  >
                    {dictionary.contact.email.text}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
