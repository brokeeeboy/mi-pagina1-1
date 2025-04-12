import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Gracias a Zubra, optimizamos el mantenimiento de nuestras líneas de producción. Su enfoque técnico redujo nuestros tiempos de inactividad considerablemente.",
      author: "Carlos Méndez",
      role: "Gerente de Operaciones, MetalSur",
    },
    {
      quote:
        "La automatización que implementaron mejoró el control y eficiencia de nuestros procesos. Ahora tomamos decisiones basadas en datos en tiempo real.",
      author: "Ana Rodríguez",
      role: "Jefa de Ingeniería, AgroTec",
    },
    {
      quote:
        "Nos apoyaron con el montaje de equipos electromecánicos en una planta industrial. Cumplieron cada hito con precisión y profesionalismo.",
      author: "Luis Fernández",
      role: "Supervisor de Proyectos, Enerbuild",
    },
  ];

  return (
    <section className="py-16 bg-blue-100">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-12">
          Testimonios Industriales
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
