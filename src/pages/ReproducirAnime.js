import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import HeaderCategory from "../components/Header/HeaderCategory";
import "../styles/css/ReproducirAnime.css";
const ReproducirAnime = () => {
  const { id, n } = useParams();

  const [infoAnime, setInfoAnime] = useState([]);

  useEffect(() => {
    const apiAnimes = async () => {
      try {
        const response = await fetch(
          // "https://api.jsonbin.io/b/624b9e67fdd14a0f46801c48/1"
          "https://api.jsonbin.io/b/62504f5b7b69e806cf4ac257"
        );
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
      <div className="page-reproductor">
        {infoAnime.map(({ title, episodes, mal_id }) => {
          return (
            <>
              <h1 className="title-video">{title}</h1>
              <section className="video-container">
                <ReactPlayer
                  width="100%"
                  height="100%"
                  url={episodes[n].link}
                  controls
                  playing
                  onPlay={() => alert("Anime reproducido por ESTACION OTAKU")}
                />
              </section>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ReproducirAnime;
