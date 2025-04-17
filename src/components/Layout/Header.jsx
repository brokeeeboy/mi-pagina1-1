import React from "react";
import { motion } from "framer-motion";
import LanguageSelector from "../LanguageSelector";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import ZubraLogo from "../../assets/imagenes/zubra-logo-retina.png";

const Header = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const navigateToRoute = (path) => {
    navigate(path);
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
              src={ZubraLogo}
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
            <motion.a
              key={"home-link"}
              onClick={() => navigateToRoute("/")}
              whileHover={{ scale: 1.1 }}
              className="text-gray-600 hover:text-blue-600 transition font-medium"
            >
              {t("header.1")}
            </motion.a>
            {/* Links header Servicios*/}
            <motion.a
              key={"servicios-link"}
              onClick={() => navigateToRoute("/servicios")}
              whileHover={{ scale: 1.1 }}
              className="text-gray-600 hover:text-blue-600 transition font-medium"
            >
              {t("header.2")}
            </motion.a>
            {/* Links header Nosotros*/}
            <motion.a
              key={"nosotros-link"}
              onClick={() => navigateToRoute("/nosotros")}
              whileHover={{ scale: 1.1 }}
              className="text-gray-600 hover:text-blue-600 transition font-medium"
            >
              {t("header.3")}
            </motion.a>
            {/* Links header Contacto*/}
            <motion.a
              key={"contacto-link"}
              onClick={() => navigateToRoute("/contacto")}
              whileHover={{ scale: 1.1 }}
              className="text-gray-600 hover:text-blue-600 transition font-medium"
            >
              {t("header.4")}
            </motion.a>
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
