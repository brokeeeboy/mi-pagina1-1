import React from "react";

const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-10 justify-center">
          {/* Mantenimiento y Reparación */}
          <div className="flex flex-col bg-gradient-to-br from-blue-50 to-white p-12 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="mb-6">
              <img
                src="servicesImages/mantenimiento-y-reparacion.jpg"
                alt="Mantenimiento y Reparación"
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-4 rounded-full mr-4">
                <span className="text-4xl">🛠️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                Mantenimiento y Reparación
              </h3>
            </div>
            <ul className="text-gray-600 pl-4 text-lg">
              <li>• Mantenimiento industrial integral.</li>
              <li>
                • Reparación especializada en equipos industriales y sanitarios.
              </li>
            </ul>
          </div>

          {/* Ingeniería y Automatización */}
          <div className="flex flex-col bg-gradient-to-br from-blue-50 to-white p-12 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="mb-6">
              <img
                src="servicesImages/ingenieria-y-automatizacion.jpg"
                alt="Ingeniería y Automatización"
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-4 rounded-full mr-4">
                <span className="text-4xl">🤖</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                Ingeniería y Automatización
              </h3>
            </div>
            <ul className="text-gray-600 pl-4 text-lg">
              <li>
                • Toma decisiones basadas en datos con nuestros dashboards y
                reportes personalizados.
              </li>
              <li>• Sistemas de transmisión mecánica de alto rendimiento.</li>
            </ul>
          </div>

          {/* Montaje y Obras Civiles */}
          <div className="flex flex-col bg-gradient-to-br from-blue-50 to-white p-12 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="mb-6">
              <img
                src="servicesImages/Montaje-y-Obras-Civiles.jpg"
                alt="Montaje y Obras Civiles"
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-4 rounded-full mr-4">
                <span className="text-4xl">🏗️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                Montaje y Obras Civiles
              </h3>
            </div>
            <ul className="text-gray-600 pl-4 text-lg">
              <li>• Montaje y puesta en marcha de equipos electromecánicos.</li>
              <li>• Ejecución de obras civiles con precisión.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
