import React from "react";
import Img1 from "../assets/imagenes/fotoNosotros2.jpg";
import Img2 from "../assets/imagenes/consolidacion.jpg";
import Img3 from "../assets/imagenes/escalabilidad.jpg";
import Img4 from "../assets/imagenes/expansion.jpg";
import Img5 from "../assets/imagenes/inicios.jpg";

const Nosotros = () => {
  const values = [
    {
      title: "Innovación Constante",
      description:
        "Buscamos continuamente nuevas tecnologías y métodos para mejorar nuestros procesos y servicios.",
    },
    {
      title: "Compromiso con la Calidad",
      description:
        "Cada proyecto y servicio cumple con los más altos estándares de calidad internacional.",
    },
    {
      title: "Sostenibilidad",
      description:
        "Implementamos prácticas respetuosas con el medio ambiente en todos nuestros procesos.",
    },
    {
      title: "Enfoque al Cliente",
      description:
        "Adaptamos nuestras soluciones a las necesidades específicas de cada cliente.",
    },
  ];

  return (
    <>
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Quiénes Somos
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos una empresa líder en el sector industrial con más de dos
              décadas de experiencia brindando soluciones integrales y
              tecnología avanzada para potenciar el crecimiento de nuestros
              clientes.
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
              <h3 className="text-2xl font-bold mb-6">Nuestra Misión</h3>
              <p className="text-gray-600 mb-6">
                Proporcionar soluciones industriales innovadoras que optimicen
                los procesos productivos de nuestros clientes, garantizando
                calidad, eficiencia y sostenibilidad en cada proyecto.
              </p>

              <h3 className="text-2xl font-bold mb-6">Nuestros Valores</h3>
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
              Trayectoria
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span style={{ color: "#2272B5" }}>Nuestra</span>{" "}
              <span style={{ color: "black" }}>Historia</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ZUBRA inició su trayectoria en el sector metalmecánico en el año
              2004, con una visión definida: brindar soluciones de ingeniería
              que generen un verdadero impacto. A lo largo de los años, la
              empresa ha experimentado un crecimiento constante, ampliando sus
              servicios y capacidades para responder a las crecientes demandas
              de clientes pertenecientes a diversas industrias.
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
                <p className="text-gray-600 mb-4">Inicios</p>
                <img
                  src={Img2}
                  alt="Inicios"
                  className="w-full h-40 object-cover rounded-lg shadow-md mb-2"
                />
                <h4 className="font-bold">Fundación</h4>
                <p className="text-gray-600">de ZUBRA E.I.R.L</p>
              </div>

              {/* 2010 */}
              <div className="text-center relative">
                <div className="w-8 h-8 bg-blue-600 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold">2010</h3>
                <p className="text-gray-600 mb-4">Expansión</p>
                <img
                  src={Img3}
                  alt="Expansión"
                  className="w-full h-40 object-cover rounded-lg shadow-md mb-2"
                />
                <h4 className="font-bold">Expansión de servicios</h4>
                <p className="text-gray-600">
                  a automatización de procesos industriales
                </p>
              </div>

              {/* 2015 */}
              <div className="text-center relative">
                <div className="w-8 h-8 bg-blue-600 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold">2015</h3>
                <p className="text-gray-600 mb-4">Escalabilidad</p>
                <img
                  src={Img4}
                  alt="Escalabilidad"
                  className="w-full h-40 object-cover rounded-lg shadow-md mb-2"
                />
                <h4 className="font-bold">Proyectos de gran envergadura</h4>
                <p className="text-gray-600">
                  con clientes como Nestlé y Sierra Gorda
                </p>
              </div>

              {/* 2022 */}
              <div className="text-center relative">
                <div className="w-8 h-8 bg-blue-600 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold">2022</h3>
                <p className="text-gray-600 mb-4">Consolidación</p>
                <img
                  src={Img5}
                  alt="Consolidación"
                  className="w-full h-40 object-cover rounded-lg shadow-md mb-2"
                />
                <h4 className="font-bold">Fabricación y estructuras</h4>
                <p className="text-gray-600">
                  Consolidación como referente en fabricación de equipos y
                  estructuras para industrias sanitarias
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Nosotros;
