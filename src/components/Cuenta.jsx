import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import "animate.css";

const CTA = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [showForm, setShowForm] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleToggleForm = () => {
    setShowForm((prev) => !prev);
    if (showForm) {
      setShowNotification(false);
    }
  };

  const onSubmit = (data) => {
    console.log(data);
    setShowNotification(true);

    reset();

    setTimeout(() => {
      setShowNotification(false);
    }, 4000);
  };

  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">{t("cuenta.ready")}</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">{t("cuenta.contact")}</p>
        <button
          onClick={handleToggleForm}
          className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg shadow-lg transition transform hover:scale-105"
        >
          {t("cuenta.contactButton")}
        </button>

        {showNotification && (
          <div
            className="fixed bottom-4 right-4 bg-blue-600 text-white py-4 px-6 rounded-lg shadow-lg flex items-center space-x-4 transform transition-all opacity-100 animate__animated animate__fadeIn"
            style={{ zIndex: 9999 }}
          >
            <span className="text-lg font-bold">
              {t("cuenta.formSubmitted")}
            </span>
            <button
              onClick={() => setShowNotification(false)}
              className="text-xl font-bold text-white ml-2"
            >
              ×
            </button>
          </div>
        )}

        {showForm && (
          <div className="mt-10 max-w-lg mx-auto bg-white text-gray-800 p-6 rounded-2xl shadow-2xl transition-all duration-500">
            <h3 className="text-2xl font-semibold mb-4">
              {t("cuenta.formTitle")}
            </h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4 text-left">
                <label className="block mb-1 font-medium">
                  {t("cuenta.name")}
                </label>
                <input
                  type="text"
                  {...register("name", {
                    required: "Este campo es obligatorio",
                    pattern: {
                      value: /^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]*$/,
                      message:
                        "El nombre solo puede contener letras y espacios",
                    },
                  })}
                  className={`w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder={t("cuenta.nameEjemplo")}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="mb-4 text-left">
                <label className="block mb-1 font-medium">
                  {t("cuenta.email")}
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: t("cuenta.emailObligatorio"),
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: t("cuenta.emailNoValido"),
                    },
                  })}
                  className={`w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder={t("cuenta.emailEjemplo")}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="mb-4 text-left">
                <label className="block mb-1 font-medium">
                  {t("cuenta.message")}
                </label>
                <textarea
                  {...register("message", {
                    required: t("cuenta.messageObligatorio"),
                  })}
                  className={`w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                  rows="4"
                  placeholder={t("cuenta.messageEjemplo")}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
              >
                {t("cuenta.enviar")}
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default CTA;
