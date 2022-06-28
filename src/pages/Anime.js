import Footer from "../components/Footer/Footer";
import HeaderCategory from "../components/Header/HeaderCategory";
import { Link, useParams } from "react-router-dom";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "../styles/css/Anime.css";
import Swal from "sweetalert2";
import SearchMovie from "../components/Cards/SearchMovie";
import { motion, useAnimation, useViewportScroll } from "framer-motion";
import ScreenLoader from "../components/Loaders/ScreenLoader";
import { useApiAnimeParam } from "../hooks/useApiAnime";
import RenderUI from "../utils/RenderUI";

const colorTransition = {
  visible: { background: "linear-gradient(180deg, rgba(6, 10, 25, 1) 0%, rgba(6, 10, 25, 0.3) 10%, rgba(6, 10, 25, 0) 20%), radial-gradient(farthest-side at 200% 21%, transparent, rgba(6, 10, 25, 1))", transition: { duration: 0.6 } },
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
    console.log(y);
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
    return (
      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <ScreenLoader />
      </motion.main>
    );
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
                  <motion.div
                    className="anime__background"
                    // ref={ref}
                    variants={colorTransition}
                    initial="initial"
                    animate={control}
                  ></motion.div>
                </div>
                <div className="anime__details">
                  <h1 className="anime__details-title">{title}</h1>
                  <div className="anime__details-episodes"> {episodes.length} episodios </div>
                  <h3 className="anime__details-info">{info}</h3>
                  {/* {episodios.map()} */}
                </div>
              </section>
            );
          })}

          {/* <div className="episodes-container">
            <h2 className="episodios-title">Episodios</h2>

            {data.map(({ image, synopsis, mal_id, episodes }, index) => {
              console.log(index);
              return (
                <article className="episodes-list" key={mal_id}>
                  <h3>EP1</h3>
                  <figure className="image-container">
                    <Link to={`/anime/${mal_id}-${0}`}>
                      <img src={episodes[0].image} alt="im" className="image-episode" />
                    </Link>
                    <div className="play"></div>
                  </figure>
                  <p className="sysnopsis-text"> {episodes[0].synopsis} </p>
                </article>
              );
            })}

            {infoAnime.map(({ image, synopsis, mal_id, episodes }) => {
              return (
                <article className="episodes-list" key={mal_id}>
                  <h3>EP2 </h3>
                  <figure className="image-container">
                    <Link to={`/anime/${mal_id}-${1}`}>
                      <img src={episodes[1].image} alt="im" className="image-episode" />
                    </Link>
                    <div className="play"></div>
                  </figure>
                  <p className="sysnopsis-text"> {episodes[1].synopsis} </p>
                </article>
              );
            })}

            {infoAnime.map(({ image, synopsis, mal_id, episodes }) => {
              return (
                <article className="episodes-list" key={mal_id}>
                  <h3>EP3 </h3>
                  <figure className="image-container">
                    <Link to={`/anime/${mal_id}-${2}`}>
                      <img src={episodes[2].image} alt="im" className="image-episode" />
                    </Link>
                    <div className="play"></div>
                  </figure>
                  <p className="sysnopsis-text"> {episodes[2].synopsis} </p>
                </article>
              );
            })}

            {infoAnime.map(({ image, synopsis, mal_id, episodes }) => {
              return (
                <article className="episodes-list" key={mal_id}>
                  <h3>EP4 </h3>
                  <figure className="image-container">
                    <Link to={`/anime/${mal_id}-${3}`}>
                      <img src={episodes[3].image} alt="im" className="image-episode" />
                    </Link>
                    <div className="play"></div>
                    <div>
                      <p> {episodes[3].episodio_1} </p>
                    </div>
                  </figure>
                  <p className="sysnopsis-text"> {episodes[3].synopsis} </p>
                </article>
              );
            })} 
          </div>*/}
        </RenderUI>
      )}
      <Footer></Footer>
    </motion.main>
  );
};

export default Anime;
