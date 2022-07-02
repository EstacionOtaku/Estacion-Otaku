import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BsFillPlayCircleFill } from "react-icons/bs";

import "./movieCard.css";
import { useState } from "react";

const MovieCard = ({ data }) => {
  const [isHover, setIsHover] = useState(false);
  const { front_image, id, seasons, category_id, name } = data;

  const seasonsNumber = seasons?.length;

  const episodesNumber = seasons.map((season) => {
    return season.episodes.map((ep) => ep);
  });
  return (
    <motion.div style={{ textAlign: "center" }} whileHover={{ scale: 1.04, transition: { duration: 0.4 } }} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      <Link to={`/anime/${id}`}>
        <div style={{ position: "relative", width: "fit-content" }}>
          <img
            className="card__multi-image_url"
            src={front_image}
            alt="movie"
            style={{
              width: "180px",
              height: "280px",
              objectFit: "cover",
              marginBottom: "10px",
              borderRadius: "10px",
            }}
          />
          <motion.div className="movie-card__inner" animate={{ opacity: isHover ? 1 : 0 }}>
            {/* <p className="movie-card__category">{Category}</p> */}
            <p className="movie-card__episodes">{episodesNumber[0].length} episodios</p>
            <h6 className="movie-card__title">{name}</h6>
            <motion.div className="movie-card__play" whileHover={{ scale: 1.3 }}>
              <BsFillPlayCircleFill />
            </motion.div>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};

export default MovieCard;
