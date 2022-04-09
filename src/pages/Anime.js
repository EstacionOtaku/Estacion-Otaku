import Footer from "../components/Footer/Footer";
import HeaderCategory from "../components/Header/HeaderCategory";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/css/Anime.css";
import Top10Cards from "../components/Cards/Top10Cards";

const Anime = () => {
  const { id } = useParams();
  const [infoAnime, setInfoAnime] = useState([]);

  useEffect(() => {
    const apiAnimes = async () => {
      try {
        const response = await fetch("https://api.jsonbin.io/b/6250d0207b69e806cf4ae55d/1");
        const data = await response.json();
        const animeSelected = data.results.filter(function (element) {
          return element.mal_id == id;
        });
        setInfoAnime(animeSelected);
        console.log(infoAnime);
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
      {infoAnime.map(({ image_url, info, mal_id, episodes, title }) => {
        return (
          <section className="portada-anime-container">
            <div className="portada-anime-presentacion">
              <img className="portada-anime__image" src={image_url} alt={title} />
              <div className="portada-anime__text-container">
                <h2 className="portada-anime__text-title">{title} </h2>
                <p className="portada-anime__text-paragraph">{info}</p>
              </div>
            </div>
            {/* <h3>anime - {id}</h3> */}
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
      <section className="py-1 px-2 mx-auto" style={{ maxWidth: "1600px" }}>
        <Top10Cards></Top10Cards>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Anime;
