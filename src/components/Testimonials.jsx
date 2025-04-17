import React from "react";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation();
  const testimonials = [
    {
      quote: t("testimonial.testimonial1"),
      author: "Carlos Méndez",
      role: t("testimonial.autor1"),
    },
    {
      quote: t("testimonial.testimonial2"),
      author: "Ana Rodríguez",
      role: t("testimonial.autor2"),
    },
    {
      quote: t("testimonial.testimonial3"),
      author: "Luis Fernández",
      role: t("testimonial.autor3"),
    },
  ];

  return (
    <section className="py-16 bg-blue-100">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-12">
          {t("testimonial.title")}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <p className="text-gray-700 italic mb-4">“{t.quote}”</p>
              <p className="text-blue-800 font-bold">{t.author}</p>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
