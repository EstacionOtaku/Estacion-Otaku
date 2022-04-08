import CategoriaCards from "../components/Cards/CategoriaCards";
import Footer from "../components/Footer/Footer";
import "../styles/scss/Inicio.scss";

import HeaderCategory from "../components/Header/HeaderCategory";
import LoMasVistoCards from "../components/Cards/LoMasVistoCards";
import Top10Cards from "../components/Cards/Top10Cards";
import Sugerencias from "../components/Cards/Sugerencias";
import { useEffect, useState } from "react";
const Inicio = ({ setTema }) => {
  const [infoAnime, setInfoAnime] = useState([]);

  useEffect(() => {
    const apiAnimes = async () => {
      try {
        const response = await fetch(
          // "https://api.jsonbin.io/b/624b9e67fdd14a0f46801c48/1"
          "https://api.jsonbin.io/b/62504f5b7b69e806cf4ac257"
        );
        const data = await response.json();
        const animeSelected = data.results.filter(function (element) {
          return element.airing === false;
        });
        setInfoAnime(animeSelected);
        console.log(data);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };

    apiAnimes();
  }, []);

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

      <section className="py-1 px-2 mx-auto" style={{ maxWidth: "1600px" }}>
        <LoMasVistoCards></LoMasVistoCards>
      </section>
      <section className="py-1 px-2 mx-auto" style={{ maxWidth: "1600px" }}>
        <Top10Cards></Top10Cards>
      </section>

      {infoAnime.map(({ image, title }) => {
        return (
          <section className="py-1 px-2 mx-auto" style={{ maxWidth: "1600px" }}>
            <Sugerencias
                image={image}
            ></Sugerencias>
          </section>
        );
      })}
      <Footer></Footer>
    </>
  );
};

export default Inicio;
