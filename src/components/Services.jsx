import React from "react";
import { useTranslation } from "react-i18next";
import IngAutomatizacionImg from "../assets/imagenes/ingenieria-y-automatizacion.jpg";
import MantenimientoImg from "../assets/imagenes/mantenimiento-y-reparacion.jpg";
import MontajeObraImg from "../assets/imagenes/Montaje-y-Obras-Civiles.jpg";

const Services = () => {
  const { t } = useTranslation();
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-10 justify-center">
          {/* Mantenimiento y Reparación */}
          <div className="flex flex-col bg-gradient-to-br from-blue-50 to-white p-12 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="mb-6">
              <img
                src={MantenimientoImg}
                alt="Mantenimiento y Reparación"
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-4 rounded-full mr-4">
                <span className="text-4xl">🛠️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                {t("services.title1")}
              </h3>
            </div>
            <ul className="text-gray-600 pl-4 text-lg">
              <li>{t("services.subtitle11")}</li>
              <li>{t("services.subtitle12")}</li>
            </ul>
          </div>

          {/* Ingeniería y Automatización */}
          <div className="flex flex-col bg-gradient-to-br from-blue-50 to-white p-12 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="mb-6">
              <img
                src={IngAutomatizacionImg}
                alt="Ingeniería y Automatización"
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-4 rounded-full mr-4">
                <span className="text-4xl">🤖</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                {t("services.title2")}
              </h3>
            </div>
            <ul className="text-gray-600 pl-4 text-lg">
              <li>{t("services.subtitle21")}</li>
              <li>{t("services.subtitle22")}</li>
            </ul>
          </div>

          {/* Montaje y Obras Civiles */}
          <div className="flex flex-col bg-gradient-to-br from-blue-50 to-white p-12 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="mb-6">
              <img
                src={MontajeObraImg}
                alt="Montaje y Obras Civiles"
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-4 rounded-full mr-4">
                <span className="text-4xl">🏗️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                {t("services.title3")}
              </h3>
            </div>
            <ul className="text-gray-600 pl-4 text-lg">
              <li>{t("services.subtitle31")}</li>
              <li>{t("services.subtitle32")}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
