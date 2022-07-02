import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { findDOMNode } from "react-dom";
import { toast } from "react-toastify";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import "../styles/css/ReproducirAnime.css";
import { IoChevronBackSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { useApiAnimeParam } from "../hooks/useApiAnime";

const ReproducirAnime = () => {
  const { id, n } = useParams();

  const { loading, data, error } = useApiAnimeParam(id, "animes");

  const navigate = useNavigate();

  const [fullscreenMode, setFullscreenMode] = useState(false);
  let player = null;
  const ref = (p) => {
    player = p;
  };
  const onStart = () => {
    if (fullscreenMode)
      findDOMNode(player)
        .requestFullscreen()
        .catch((err) => {
          toast.error("Could not activate full-screen mode :(");
        });
  };

  const onEnded = () => {
    setFullscreenMode(document.fullscreenElement !== null);
  };

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="page-play">
      <div className="page-reproductor">
        {data.map(({ name, seasons, id }) => {
          const episodes = seasons[0].episodes;
          const episodeSelected = episodes.find((item) => item.id.toString() === n);
          const episodeURL = episodeSelected.url;
          const episodeName = episodeSelected.name;
          const episodeNumber = episodeSelected.episode_number.slice(2);
          return (
            <>
              <motion.div className="title-video" initial={{ opacity: 0.4 }} whileHover={{ opacity: 1 }}>
                <motion.div className="go-back" onClick={() => navigate(-1)} whileHover={{ scale: 1.1, cursor: "pointer" }}>
                  <IoChevronBackSharp />
                </motion.div>
                <div>
                  <h1>{name}</h1>
                  <p className="episode-name">
                    Episodio {episodeNumber} | {episodeName}
                  </p>
                </div>
              </motion.div>

              <section className="video-container">
                <ReactPlayer
                  ref={ref}
                  width="100%"
                  height="80vh"
                  url={episodeURL}
                  controls
                  playing
                  onStart={onStart}
                  onEnded={onEnded}
                  light={episodeSelected.image}
                  // config={{
                  //   youtube: {
                  //     playerVars: { showinfo: 1 },
                  //   },
                  // }}
                />
              </section>
            </>
          );
        })}
      </div>
    </motion.main>
  );
};

export default ReproducirAnime;
