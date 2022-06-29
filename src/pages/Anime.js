import Footer from "../components/Footer/Footer";
import HeaderCategory from "../components/Header/HeaderCategory";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/css/Anime.css";
import Swal from "sweetalert2";
import SearchMovie from "../components/Cards/SearchMovie";
import { motion, useAnimation, useViewportScroll } from "framer-motion";
import ScreenLoader from "../components/Loaders/ScreenLoader";
import { useApiAnimeParam } from "../hooks/useApiAnime";
import RenderUI from "../utils/RenderUI";
import Slider from "react-slick";
import MovieCard from "../components/Cards/MovieCard";
import EpisodeCarousel from "../components/Carousel/EpisodeCarousel";
import { shortText } from "../utils/shortText";

const colorTransition = {
  visible: { background: "linear-gradient(180deg, rgba(6, 10, 25, 1) 0%, rgba(6, 10, 25, 0.3) 10%, rgba(6, 10, 25, 0) 20%), radial-gradient(farthest-side at 200% 21%, transparent, rgba(6, 10, 25, 1))", transition: { duration: 0.4 } },
  initial: { background: "linear-gradient(180deg, rgba(6, 10, 25, 1) 0%, rgba(6, 10, 25, 0.3) 10%, rgba(6, 10, 25, 0) 20%), radial-gradient(farthest-side at 73% 21%, transparent, rgba(6, 10, 25, 1))" },
};

const Anime = (imageHeader) => {
  const { scrollY } = useViewportScroll();
  const control = useAnimation();
  scrollY.onChange((y) => {
    if (y > 50) {
      control.start("visible");
    } else {
      control.start("initial");
    }
  });
  const { id } = useParams();

  const urlImage = Object.values(imageHeader);

  const [movie, setMovie] = useState([]);
  const [dataFilter, setDataFilter] = useState({});

  const useApiAnime = useApiAnimeParam(id);
  const { data, loading, error } = useApiAnime;

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
    return <ScreenLoader />;
  }

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <HeaderCategory imageHeader={urlImage} setMovie={setMovie}></HeaderCategory>
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
        <RenderUI keyData={useApiAnime}>
          {data.map(({ image_url, info, mal_id, episodes, title }, index) => {
            return (
              <section className="anime-section" key={index}>
                <div className="anime__image-container">
                  <img src={image_url} alt="" className="anime__image" />
                  <motion.div className="anime__background" variants={colorTransition} initial="initial" animate={control}></motion.div>
                </div>
                <div className="anime__details">
                  <h1 className="anime__details-title">{title}</h1>
                  <div className="anime__details-episodes"> {episodes.length} episodios </div>
                  <h3 className="anime__details-info">{shortText(info)}</h3>
                  <div className="anime__episode-carousel">
                    <EpisodeCarousel data={episodes} route={mal_id} />
                  </div>
                </div>
              </section>
            );
          })}
        </RenderUI>
      )}
      <Footer></Footer>
    </motion.main>
  );
};

export default Anime;
