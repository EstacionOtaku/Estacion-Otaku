import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import HeaderCategory from "../components/Header/HeaderCategory";
import "../styles/css/ReproducirAnime.css";
import { motion } from "framer-motion";

const ReproducirAnime = () => {
  const { id, n } = useParams();
  console.log(n, id);
  console.log(useParams());
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
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <HeaderCategory></HeaderCategory>
      <div className="page-reproductor">
        {infoAnime.map(({ title, episodes, mal_id }) => {
          console.log(episodes);
          return (
            <>
              <h1 className="title-video">{title}</h1>
              <section className="video-container">
                <ReactPlayer width="100%" height="100%" url={episodes[n].link} controls playing onPlay={() => alert("Anime reproducido por ESTACION OTAKU")} />
              </section>
            </>
          );
        })}
      </div>
    </motion.main>
  );
};

export default ReproducirAnime;
