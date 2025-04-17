import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">ZUBRA</h2>
            <p className="text-gray-300">{t("footer.descripcion")}</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{t("footer.enlace")}</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  {t("footer.inicio")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  {t("footer.services")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  {t("footer.nosotros")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  {t("footer.contact")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{t("footer.contacto")}</h3>
            <ul className="space-y-2 text-gray-300">
              <li>info@zubra.com</li>
              <li>+1 234 567 890</li>
              <li>Calle Principal 123</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{t("footer.siguenos")}</h3>
            <div className="flex space-x-4">
              {/* Iconos de redes sociales aquí */}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Zubra. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
