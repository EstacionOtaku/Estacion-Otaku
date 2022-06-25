import React from "react";
import CategoriaCards from "../components/Cards/CategoriaCards";
import Footer from "../components/Footer/Footer";
import "../styles/scss/Inicio.scss";
import { motion } from "framer-motion";
import HeaderCategory from "../components/Header/HeaderCategory";
import LoMasVistoCards from "../components/Cards/LoMasVistoCards";
import Top10Cards from "../components/Cards/Top10Cards";
import Sugerencias from "../components/Cards/Sugerencias";
import NosotrosButton from "../components/Buttons/NosotrosButton.jsx";
import { useEffect } from "react";
import { useState } from "react";
import SearchMovie from "../components/Cards/SearchMovie";
import Swal from "sweetalert2";
import ScreenLoader from "../components/Loaders/ScreenLoader";

const Inicio = ({ setTema, imageHeader }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState([]);
  const [dataFilter, setDataFilter] = useState({});

  useEffect(() => {
    const apiAnimes = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://api.jsonbin.io/b/6250d0207b69e806cf4ae55d/1");
        const data = await response.json();
        setData(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
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

  if (loading) {
    return (
      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <ScreenLoader />
      </motion.main>
    );
  }

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <HeaderCategory imageHeader={imageHeader} setMovie={setMovie}></HeaderCategory>
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
              <div class="alert alert-danger text-center" role="alert">
                Ups, No se encontro tu pelicula
              </div>
            </section>
          )}
        </>
      ) : (
        <>
          <img className="prueba_image" src="https://i.postimg.cc/MH2VXPvw/fondoanime.jpg" alt="portada" />
          <section>
            <CategoriaCards setTema={setTema}></CategoriaCards>
          </section>

          <h3 className="">Top 10 Perú</h3>
          <section className="" style={{ maxWidth: "1600px" }}>
            <Top10Cards></Top10Cards>
          </section>

          <h3 className="">Sugerencias</h3>
          <section className="" style={{ maxWidth: "1600px" }}>
            <Sugerencias></Sugerencias>
          </section>

          <h3 className="">Lo más visto</h3>
          <section className="" style={{ maxWidth: "1600px" }}>
            <LoMasVistoCards></LoMasVistoCards>
          </section>

          <div className="discover__button">
            <NosotrosButton text="Conoce al equipo" />
          </div>
        </>
      )}
      <Footer></Footer>
    </motion.main>
  );
};

export default Inicio;
