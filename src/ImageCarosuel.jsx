import React from "react";
import "animate.css";

const PartnerLogos = () => {
  const logos = [
    {
      src: "https://zubra.cl/wp-content/uploads/2024/12/Nestle-Logo-Transparent-Background-White.png.webp",
      alt: "Nestlé",
    },
    {
      src: "https://zubra.cl/wp-content/uploads/2024/12/CMP-logo.png",
      alt: "CMP",
    },
    {
      src: "https://zubra.cl/wp-content/uploads/2024/12/logo-sierra-gorda1.png",
      alt: "Sierra Gorda",
    },
    {
      src: "https://zubra.cl/wp-content/uploads/2024/12/logoColor-e1734803263462.png",
      alt: "CristalChile",
    },
  ];

  return (
    <div className="w-full bg-[#e2e5eb] py-10">
      {" "}
      {/* Fondo gris claro */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center">
        {logos.map((logo, index) => (
          <div
            key={index}
            className={`flex justify-center items-center animate__animated animate__zoomIn`}
            style={{
              animationDelay: `${index * 0.2}s`,
              animationFillMode: "both",
            }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-20 object-contain filter grayscale"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerLogos;
