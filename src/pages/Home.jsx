import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import ImageCarosuel from "../components/ImageCarosuel";
import Cuenta from "../components/Cuenta";
import Maps from "../components/Maps";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/contacto") {
      scrollToBottom();
    } else {
      scrollToTop();
    }
  }, [location.pathname]);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Hero />
      <Services />
      <Testimonials />
      <ImageCarosuel />
      <Cuenta />

      {/* Componente Maps */}
      <Maps />
    </div>
  );
};

export default Home;
