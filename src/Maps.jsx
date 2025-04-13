import React from "react";
import { motion } from "framer-motion"; // Importamos framer-motion
import { useTranslation } from "react-i18next";
const Maps = () => {
  const { t } = useTranslation();
  return (
    <div className="my-12 mx-auto max-w-7xl px-4">
      <motion.h2
        className="text-4xl font-bold text-center text-blue-600 mb-6"
        initial={{ opacity: 0, y: -20 }} // Aparece desde arriba
        animate={{ opacity: 1, y: 0 }} // Se desplaza hacia su posición final
        transition={{ duration: 1, ease: "easeOut" }} // Duración de la animación
      >
        {t("mapa.title")}
      </motion.h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d53195.98597189046!2d-70.797097!3d-33.559894!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662dd9c64a2a50d%3A0x33e54aca24d1708!2sSegunda%20Avenida%20432%2C%209711149%20Padre%20Hurtado%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile!5e0!3m2!1ses!2sus!4v1744521920466!5m2!1ses!2sus"
        width="100%"
        height="600"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Maps;
