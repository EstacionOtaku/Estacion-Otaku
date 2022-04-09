import CategoriaCards from "../components/Cards/CategoriaCards";
import Footer from "../components/Footer/Footer";
import "../styles/scss/Inicio.scss";

import HeaderCategory from "../components/Header/HeaderCategory";
import LoMasVistoCards from "../components/Cards/LoMasVistoCards";
import Top10Cards from "../components/Cards/Top10Cards";
import Sugerencias from "../components/Cards/Sugerencias";
// import { useEffect, useState } from "react";
const Inicio = ({ setTema }) => {
  return (
    <>
      <HeaderCategory></HeaderCategory>
      <img
        className="prueba_image"
        src="https://i.postimg.cc/MH2VXPvw/fondoanime.jpg"
        alt="portada"
      />
      <section className="py-1 px-2 mx-auto" style={{ maxWidth: "1600px" }}>
        <CategoriaCards setTema={setTema}></CategoriaCards>
      </section>

      <h3 className="fs-3 text-center">TOP 10 PERÚ</h3>
      <section className="py-1 px-2 mx-auto" style={{ maxWidth: "1600px" }}>
        <Top10Cards></Top10Cards>
      </section>

      <h3 className="fs-3 text-center">SUGERENCIAS</h3>
      <section className="py-1 px-2 mx-auto" style={{ maxWidth: "1600px" }}>
        <Sugerencias></Sugerencias>
      </section>

      <h3 className="fs-3 text-center">LO MÁS VISTO</h3>
      <section className="py-1 px-2 mx-auto" style={{ maxWidth: "1600px" }}>
        <LoMasVistoCards></LoMasVistoCards>
      </section>

      <Footer></Footer>
    </>
  );
};

export default Inicio;
