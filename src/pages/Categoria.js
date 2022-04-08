import HeaderInicio from "../components/Header/HeaderInicio";
import Galeria from "../components/Cards/Galeria";
import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import "../styles/scss/Categoria.scss";
import { Link } from "react-router-dom";

const Categoria = ({ tema }) => {
  const [gallery, setGallery] = useState([]);
  // const recurso = `galeria`;

  useEffect(() => {
    const apiAnimes = async () => {
      try {
        const response = await fetch("https://api.jsonbin.io/b/624b9e67fdd14a0f46801c48/1");
        const data = await response.json();
        setGallery(data.results);
        //console.log(data.galeria);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };

    apiAnimes();
  }, []);

  return (
    <>
      <HeaderInicio></HeaderInicio>
      {/* <img
        className="prueba_image"
        src="https://i.postimg.cc/MH2VXPvw/fondoanime.jpg"
        alt="portada"
      /> */}
      <section class="hero">
        <div class="hero--vertical">
          <div class="hero--horizontal">
            <div class="back-container"></div>
            <a href="" class="back--button">
              <Link to="/inicio">⏪ Atrás</Link>
            </a>
            <h3 class="hero--category">{tema}</h3>
            <h5 class="hero--year">2016</h5>
            <h1 class="hero--name">Shigatsu wa Kimi no Uso</h1>
            <div class="play-container"></div>
            <a href="" class="play--button">
              ▶️ Reproducir
            </a>
          </div>
        </div>
      </section>
      <section>
        <Galeria data={gallery} />
      </section>

      <Footer></Footer>
    </>
  );
};

export default Categoria;
