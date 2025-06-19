"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4"> الرحاب</h3>
            <p className="text-gray-400">
              شركة رائدة في مجال حلول الطاقة الشمسية في مصر
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/projects"
                  className="text-gray-400 hover:text-white"
                >
                  مشروعاتنا
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-gray-400 hover:text-white"
                >
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white">
                  من نحن
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-400 hover:text-white"
                >
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">معلومات الاتصال</h3>
            <ul className="space-y-2 text-gray-400">
              <li>القاهرة، مصر</li>
              <li>هاتف: 123-456-789</li>
              <li>البريد الإلكتروني: info@example.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} الرحاب للطاقة الشمسية. جميع الحقوق
            محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
}
