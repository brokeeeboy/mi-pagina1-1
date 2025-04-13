import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Services from "./Services";
import Testimonials from "./Testimonials";
import ImageCarosuel from "./ImageCarosuel"; // Importamos el carrusel
import Cuenta from "./Cuenta";
import Footer from "./Footer";
import FloatingChatButton from "./FloatingChatButton"; // Botón flotante
import Maps from "./maps";
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
        <Cuenta />

        {/* Componente Maps */}
        <Maps />
      </main>
      <Footer />

      {/* Botón flotante visible en todas las páginas */}
      <FloatingChatButton />
    </div>
  );
};

export default App;
