import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white px-4 py-20">
      {/* Background Blur Effects */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-white/10 rounded-full filter blur-3xl animate-pulse z-0" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-white/10 rounded-full filter blur-3xl animate-pulse z-0" />

      <div className="container mx-auto text-center relative z-10">
        <motion.h2
          className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="block text-white drop-shadow-lg">
            {t("hero.title")}
          </span>
          <span className="block text-blue-200">{t("hero.subtitle")}</span>
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-blue-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          {t("hero.text1")}{" "}
          <span className="font-bold text-white">{t("hero.text2")}</span>,{" "}
          {t("hero.text3")}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <button className="bg-white text-blue-700 hover:bg-gray-100 font-semibold py-3 px-8 rounded-xl shadow-xl transition duration-300 transform hover:scale-105">
            {t("hero.button1")}
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-blue-700 font-semibold py-3 px-8 rounded-xl transition duration-300 transform hover:scale-105">
            {t("hero.button2")}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
