import React from "react";
import { motion } from "framer-motion";
import MantenimientoImg from "../assets/imagenes/mantenimiento-y-reparacion.jpg";
import AutomatizacionImg from "../assets/imagenes/ingenieria-y-automatizacion.jpg";
import MontajeImg from "../assets/imagenes/Montaje-y-Obras-Civiles.jpg";
import FabricacionImg from "../assets/imagenes/Fabricar.png";
import { useTranslation } from "react-i18next";

const Servicios = () => {
  const { t } = useTranslation();
  const services = [
    {
      title: t("servicios.title1"),
      imageSrc: MantenimientoImg,
      imageAlt: "Mantenimiento industrial",
      items: [t("servicios.subtitle11"), t("servicios.subtitle12")],
    },
    {
      title: t("servicios.title2"),
      imageSrc: AutomatizacionImg,
      imageAlt: "Automatización de procesos",
      items: [t("servicios.subtitle21"), t("servicios.subtitle22")],
    },
    {
      title: t("servicios.title3"),
      imageSrc: MontajeImg,
      imageAlt: "Montaje de equipos",
      items: [t("servicios.subtitle31"), t("servicios.subtitle32")],
    },
    {
      title: t("servicios.title4"),
      imageSrc: FabricacionImg,
      imageAlt: "Diseño y estructuras metálicas",
      items: [
        t("servicios.subtitle41"),
        t("servicios.subtitle42"),
        t("servicios.subtitle43"),
        t("servicios.subtitle44"),
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
            {t("servicios.top1")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("servicios.top3")} <strong>ZUBRA</strong>
            {t("servicios.top2")}
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
