import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Services from "./Services";
import Testimonials from "./Testimonials";
import ImageCarosuel from "./ImageCarosuel"; // Importamos el carrusel
import CTA from "./Cuenta";
import Footer from "./Footer";
import "./index.css";
import "./i18n/config";

const App = () => {
  return (
    <div className="font-sans bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Services />
        <Testimonials />

        <ImageCarosuel />

        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
