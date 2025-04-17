import React from "react";
import { motion } from "framer-motion";
import MantenimientoImg from "../assets/imagenes/mantenimiento-y-reparacion.jpg";
import AutomatizacionImg from "../assets/imagenes/ingenieria-y-automatizacion.jpg";
import MontajeImg from "../assets/imagenes/Montaje-y-Obras-Civiles.jpg";
import FabricacionImg from "../assets/imagenes/Fabricar.png";

const Servicios = () => {
  const services = [
    {
      title: "Mantenimiento y Reparación",
      imageSrc: MantenimientoImg,
      imageAlt: "Mantenimiento industrial",
      items: [
        "Mantenimiento industrial integral",
        "Reparación especializada en equipos industriales y sanitarios",
      ],
    },
    {
      title: "Ingeniería y Automatización",
      imageSrc: AutomatizacionImg,
      imageAlt: "Automatización de procesos",
      items: [
        "Automatización de procesos industriales para mayor eficiencia",
        "Sistemas de transmisión mecánica de alto rendimiento",
      ],
    },
    {
      title: "Montaje y Obras Civiles",
      imageSrc: MontajeImg,
      imageAlt: "Montaje de equipos",
      items: [
        "Montaje y puesta en marcha de equipos electromecánicos",
        "Ejecución de obras civiles con precisión",
      ],
    },
    {
      title: "Fabricación y Diseño",
      imageSrc: FabricacionImg,
      imageAlt: "Diseño y estructuras metálicas",
      items: [
        "Estructuras metálicas específicas para proyectos industriales",
        "Producción de matrices personalizadas de alta precisión",
        "Mesas transportadoras para todo tipo de industria, incluyendo sanitaria",
        "Trailers para instrumentación y generadores solares",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="servicios">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Soluciones Industriales Personalizadas
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            En <strong>ZUBRA</strong>, combinamos experiencia, innovación y
            compromiso para ofrecer soluciones industriales integrales. Desde la
            fabricación de estructuras metálicas hasta la automatización de
            procesos, somos el aliado estratégico que tu empresa necesita.
          </p>
        </motion.div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md p-6 border hover:shadow-lg transition"
            >
              <img
                src={service.imageSrc}
                alt={service.imageAlt}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
