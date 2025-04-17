import i18n from "i18next";
import { useTranslation, initReactI18next, Translation } from "react-i18next";
import enJSON from "./en.json";
import esJSON from "./es.json";
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enJSON },
    es: {
      translation: esJSON,
    },
  },
  lng: "es",
  fallbackLng: "en",
  debug: true,
});
export default i18n;
