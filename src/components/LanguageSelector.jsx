// src/components/LanguageSelector.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import esFlag from "../assets/banderasImages/es.png";
import enFlag from "../assets/banderasImages/en.png";

const languages = [
  { code: "es", name: "Español", flag: esFlag },
  { code: "en", name: "English", flag: enFlag },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const selectedLang = languages.find((l) => l.code === i18n.language);

  return (
    <div className="relative">
      <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
        <img src={selectedLang?.flag} alt="flag" className="w-5 h-5" />
      </div>
      <select
        onChange={(e) => changeLanguage(e.target.value)}
        value={i18n.language}
        className="appearance-none pr-10 pl-3 py-2 text-sm bg-white border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
