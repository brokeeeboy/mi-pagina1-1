import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import FloatingChatButton from "./FloatingChatButton";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />

      {/* Botón flotante visible en todas las páginas */}
      <FloatingChatButton />
    </>
  );
};

export default Layout;
