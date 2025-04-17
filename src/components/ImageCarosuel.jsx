import React from "react";
import "animate.css";
import CMPLogo from "./../assets/imagenes/CMP-logo.png";
import SierraGordaLogo from "./../assets/imagenes/logo-sierra-gorda1.png";
import NestleLogo from "./../assets/imagenes/nestle-logo.svg";
import CristalLogo from "./../assets/imagenes/logoColor-e1734803263462.png";

const PartnerLogos = () => {
  const logos = [
    {
      src: NestleLogo,
      alt: "Nestlé",
    },
    {
      src: CMPLogo,
      alt: "CMP",
    },
    {
      src: SierraGordaLogo,
      alt: "Sierra Gorda",
    },
    {
      src: CristalLogo,
      alt: "CristalChile",
    },
  ];

  return (
    <div className="w-full bg-[#e2e5eb] py-10">
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
