import React from "react";
import { motion } from "framer-motion";
import LanguageSelector from "./components/LanguageSelector";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white shadow-sm sticky top-0 z-50"
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo con animación */}
          <motion.a
            href="#"
            className="flex-shrink-0"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <img
              src="/zubra-logo-retina.png"
              alt="Logotipo de Zubra"
              className="h-16 w-auto object-contain"
            />
          </motion.a>

          {/* Navegación */}
          <motion.div
            className="hidden md:flex items-center space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {[t("header.1"), t("header.2"), t("header.3")].map((item, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-gray-600 hover:text-blue-600 transition font-medium"
              >
                {item}
              </motion.a>
            ))}
            <motion.button
              onClick={scrollToBottom}
              whileHover={{ scale: 1.1 }}
              className="text-gray-600 hover:text-blue-600 transition"
            >
              {t("header.4")}
            </motion.button>

            <motion.div
              className="ml-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <LanguageSelector />
            </motion.div>
          </motion.div>

          {/* Botón hamburguesa */}
          <button className="md:hidden text-blue-600">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
