import React from "react";
import CategoriaCards from "../components/Cards/CategoriaCards";
import Footer from "../components/Footer/Footer";
import "../styles/scss/Inicio.scss";
import { motion } from "framer-motion";
import HeaderCategory from "../components/Header/HeaderCategory";

import NosotrosButton from "../components/Buttons/NosotrosButton.jsx";
import { useEffect } from "react";
import { useState } from "react";
import SearchMovie from "../components/Cards/SearchMovie";
import Swal from "sweetalert2";
import ScreenLoader from "../components/Loaders/ScreenLoader";
import Carousel from "../components/Cards/Carousel";
import useApiAnime from "../hooks/useApiAnime";
import PlayBlock from "../components/PlayBlock/PlayBlock";
import RenderUI from "../utils/RenderUI.jsx";
import { getRandomInt } from "../utils/getRandomInt";

const Inicio = ({ setTema, imageHeader }) => {
  const [isAnimeSelected, setIsAnimeSelected] = useState();
  const [movie, setMovie] = useState([]);
  const [dataFilter, setDataFilter] = useState({});

  const apiData = useApiAnime("animes");
  const { loading, data, error } = apiData;

  const { data: categoryData } = useApiAnime("categories");

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
    if (data) {
      const animesLength = data.length;
      const randomAnime = getRandomInt(animesLength);
      setIsAnimeSelected(randomAnime);
    }
  }, [data]);

  if (loading) {
    return <ScreenLoader />;
  }
  const top10Data = data?.filter((element) => {
    return element.is_active === true;
  });

  const sugerenciasData = data?.filter((element) => {
    return element.is_active === true;
  });

  const CTAPlayBlock = top10Data[isAnimeSelected];
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <HeaderCategory imageHeader={imageHeader} setMovie={setMovie}></HeaderCategory>
      {dataFilter.length >= 0 && movie.length ? (
        <>
          <h3 className="fs-3 text-center" style={{ marginTop: "2rem" }}>
            Búsqueda Encontrada
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
        <RenderUI keyData={apiData}>
          <PlayBlock data={CTAPlayBlock} />

          <CategoriaCards data={categoryData} setTema={setTema}></CategoriaCards>
          <section style={{ paddingTop: "4rem" }}>
            <Carousel title="Top 10 Perú" data={top10Data}></Carousel>
            <Carousel title="Sugerencias" data={sugerenciasData}></Carousel>
            <Carousel title="Los más vistos" data={data}></Carousel>
          </section>
        </RenderUI>
      )}
      <Footer></Footer>
    </motion.main>
  );
};

export default Inicio;
