import HeaderInicio from "../components/Header/HeaderInicio";
import Galeria from "../components/Cards/Galeria";
import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import "../styles/scss/Categoria.scss";
import { Link } from "react-router-dom";

const Categoria = ({ tema }) => {
  const [theme, setTheme] = useState({});

  useEffect(() => {
    const category = async () => {
      try {
        const response = await fetch(`http://localhost:5000/${tema}`);
        const data = await response.json();

        setTheme(data[0]);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    category();
  }, []);

  const { titulo, img, año } = theme;

  return (
    <>
      <HeaderInicio></HeaderInicio>
      <section className="categoria__portada">
        <figure className="categoria__portada-container">
          <img className="prueba_image" src={img} alt="portada" />
        </figure>
      </section>
      <section className="hero hero--color">
        <div className="hero--vertical">
          <div className="hero--horizontal">
            <div className="back-container"></div>
            <a href="" className="back--button">
              <Link to="/inicio">⏪ Atrás</Link>
            </a>
            <h3 className="hero--category">{tema}</h3>
            <h5 className="hero--year">{año}</h5>
            <h1 className="hero--name">{titulo}</h1>
            <div className="play-container"></div>
            <a href="" className="play--button">
              ▶️ Reproducir
            </a>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
};

export default Categoria;
