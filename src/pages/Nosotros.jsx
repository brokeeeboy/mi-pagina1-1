import React from "react";
import Img1 from "../assets/imagenes/fotoNosotros2.jpg";
import Img2 from "../assets/imagenes/consolidacion.jpg";
import Img3 from "../assets/imagenes/escalabilidad.jpg";
import Img4 from "../assets/imagenes/expansion.jpg";
import Img5 from "../assets/imagenes/inicios.jpg";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const Nosotros = () => {
  const { t } = useTranslation();
  const values = [
    {
      title: t("nosotros.title1"),
      description: t("nosotros.text1"),
    },
    {
      title: t("nosotros.title2"),
      description: t("nosotros.text2"),
    },
    {
      title: t("nosotros.title3"),
      description: t("nosotros.text3"),
    },
    {
      title: t("nosotros.title4"),
      description: t("nosotros.text4"),
    },
  ];

  return (
    <>
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("nosotros.subtitle1")}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("nosotros.subtitle1des")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-1 md:order-1 relative">
              <div className="aspect-square rounded-lg overflow-hidden shadow-xl">
                <img
                  src={Img1}
                  alt="Equipo de trabajo en fábrica industrial"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden md:block absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg z-[-1]"></div>
            </div>

            <div className="order-2 md:order-2">
              <h3 className="text-2xl font-bold mb-6">
                {t("nosotros.subtitle2")}
              </h3>
              <p className="text-gray-600 mb-6">{t("nosotros.subtitle2des")}</p>

              <h3 className="text-2xl font-bold mb-6">
                {t("nosotros.subtitle3")}
              </h3>
              <div className="grid gap-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-blue-700 mr-3 mt-1 flex-shrink-0 font-bold text-lg">
                      ✓
                    </span>
                    <div>
                      <h4 className="font-bold">{value.title}</h4>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="history" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-blue-600 text-sm font-bold uppercase mb-2">
              {t("nosotros.mid1")}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span style={{ color: "#2272B5" }}>{t("nosotros.mid2")}</span>{" "}
              <span style={{ color: "black" }}>{t("nosotros.mid3")}</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("nosotros.mid4")}
            </p>
          </div>
        </div>
      </section>

      <section id="timeline" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative">
            {/* Línea central */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-blue-800"></div>

            {/* Elementos de la línea de tiempo */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* 2004 */}
              <div className="text-center relative">
                <div className="w-8 h-8 bg-blue-600 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold">2004</h3>
                <p className="text-gray-600 mb-4">{t("nosotros.low1")}</p>
                <img
                  src={Img2}
                  alt="Inicios"
                  className="w-full h-40 object-cover rounded-lg shadow-md mb-2"
                />
                <h4 className="font-bold">{t("nosotros.low2")}</h4>
                <p className="text-gray-600">de ZUBRA E.I.R.L</p>
              </div>

              {/* 2010 */}
              <div className="text-center relative">
                <div className="w-8 h-8 bg-blue-600 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold">2010</h3>
                <p className="text-gray-600 mb-4">{t("nosotros.low3")}</p>
                <img
                  src={Img3}
                  alt="Expansión"
                  className="w-full h-40 object-cover rounded-lg shadow-md mb-2"
                />
                <h4 className="font-bold">{t("nosotros.low31")}</h4>
                <p className="text-gray-600">{t("nosotros.low32")}</p>
              </div>

              {/* 2015 */}
              <div className="text-center relative">
                <div className="w-8 h-8 bg-blue-600 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold">2015</h3>
                <p className="text-gray-600 mb-4">{t("nosotros.low4")}</p>
                <img
                  src={Img4}
                  alt="Escalabilidad"
                  className="w-full h-40 object-cover rounded-lg shadow-md mb-2"
                />
                <h4 className="font-bold">{t("nosotros.low41")}</h4>
                <p className="text-gray-600">{t("nosotros.low42")}</p>
              </div>

              {/* 2022 */}
              <div className="text-center relative">
                <div className="w-8 h-8 bg-blue-600 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold">2022</h3>
                <p className="text-gray-600 mb-4">{t("nosotros.low5")}</p>
                <img
                  src={Img5}
                  alt="Consolidación"
                  className="w-full h-40 object-cover rounded-lg shadow-md mb-2"
                />
                <h4 className="font-bold">{t("nosotros.low51")}</h4>
                <p className="text-gray-600">{t("nosotros.low52")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Nosotros;
