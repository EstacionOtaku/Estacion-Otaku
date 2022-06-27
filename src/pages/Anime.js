import Footer from "../components/Footer/Footer";
import HeaderCategory from "../components/Header/HeaderCategory";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/css/Anime.css";
import Swal from "sweetalert2";
import SearchMovie from "../components/Cards/SearchMovie";
import { motion } from "framer-motion";
const Anime = (imageHeader) => {
  const { id } = useParams();
  const [infoAnime, setInfoAnime] = useState([]);
  const urlImage = Object.values(imageHeader);
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
        const animeSelected = data.results.filter(function (element) {
          return element.mal_id == id;
        });
        setInfoAnime(animeSelected);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };

    apiAnimes();
  }, []);

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
        <>
          {infoAnime.map(({ image_url, info, mal_id, episodes, title }, index) => {
            return (
              <section className="portada-anime-container" key={index}>
                <div className="portada-anime-presentacion">
                  <img className="portada-anime__image" src={image_url} alt={title} />
                  <div className="portada-anime__text-container">
                    <h2 className="portada-anime__text-title">{title} </h2>
                    <p className="portada-anime__text-paragraph">{info}</p>
                  </div>
                </div>
              </section>
            );
          })}

          <div className="episodes-container">
            <h2 className="episodios-title">Episodios</h2>

            {infoAnime.map(({ image, synopsis, mal_id, episodes }) => {
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
          </div>
          <h2 className="py-3 fs-4 text-center">Animes similares a éste</h2>

          {/* <section className="py-1 px-2 mx-auto" style={{ maxWidth: "1600px" }}>
            <Top10Cards></Top10Cards>
          </section> */}
        </>
      )}
      <Footer></Footer>
    </motion.main>
  );
};

export default Anime;
