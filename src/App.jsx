import React from "react";
import "./index.css";
import "./i18n/config";
import "./pages/Home";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import Layout from "./components/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Home />} path={"/"} />
          <Route index element={<Home />} path={"/contacto"} />
          <Route element={<Nosotros />} path={"/nosotros"} />
          <Route element={<Servicios />} path={"/servicios"} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
