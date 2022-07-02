import React from "react";
import HeaderInicio from "../components/Header/HeaderInicio";
import Galeria from "../components/Cards/Galeria";
import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import "../styles/scss/Categoria.scss";
import { Link } from "react-router-dom";
import CategoriaPeli from "../components/Cards/CategoriaPeli";
import HeaderCategory from "../components/Header/HeaderCategory";
import Swal from "sweetalert2";
import SearchMovie from "../components/Cards/SearchMovie";
import { motion } from "framer-motion";

const Categoria = ({ tema, imageHeader }) => {
  const [theme, setTheme] = useState({});
  const [gallery, setGallery] = useState([]);
  const [data, setData] = useState([]);
  const [movie, setMovie] = useState([]);
  const [dataFilter, setDataFilter] = useState({});

  useEffect(() => {
    const apiAnimes = async () => {
      try {
        const response = await fetch("https://api.jsonbin.io/b/6250d0207b69e806cf4ae55d/1");
        const data = await response.json();
        setData(data.results);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    apiAnimes();
  }, []);

  useEffect(() => {
    filterData(movie);
  }, [movie]);

  const filterData = (movie) => {
    if (!movie) {
      setDataFilter({});
    } else {
      const filteredData = data.filter((item) => {
        return Object.keys(item).some((key) => item[key].toString().toLowerCase().includes(movie));
      });
      setDataFilter(filteredData);
    }
  };

  useEffect(() => {
    if (movie.length && dataFilter.length < 1) {
      Swal.fire({
        title: "Ups, tu pelicula no se encuentra!",
        text: "Pero tienes mas opciones",
        icon: "error",
        timer: 2000,
        confirmButtonText: "Ok",
      });
    }
  }, [dataFilter]);

  useEffect(() => {
    const apiAnimes = async () => {
      try {
        const response = await fetch("https://api.jsonbin.io/b/6250d0207b69e806cf4ae55d/1");
        const data = await response.json();
        setGallery(data.results);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };

    apiAnimes();
  }, []);

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
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <HeaderCategory imageHeader={imageHeader} setMovie={setMovie}></HeaderCategory>
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
      <section className="py-4">
        {dataFilter.length >= 0 && movie.length ? (
          <>
            <h3 className="fs-3 text-center" style={{ marginTop: "2rem" }}>
              Busqueda Encontrada
            </h3>
            {dataFilter.length ? (
              <section className="py-1 px-2 mx-auto" style={{ maxWidth: "1600px" }}>
                <SearchMovie dataFilter={dataFilter}></SearchMovie>
              </section>
            ) : (
              <section className="py-4 px-2 mx-auto" style={{ maxWidth: "1600px" }}>
                <div className="alert alert-danger text-center" role="alert">
                  Ups, No se encontro tu pelicula
                </div>
              </section>
            )}
          </>
        ) : (
          <Galeria data={gallery} />
        )}
      </section>

      <Footer></Footer>
    </motion.main>
  );
};

export default Categoria;
