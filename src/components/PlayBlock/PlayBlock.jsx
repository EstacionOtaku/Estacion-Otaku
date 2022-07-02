import { FaPlay } from "react-icons/fa";
import "./PlayBlock.css";
import { shortText } from "../../utils/shortText";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScreenLoader from "../Loaders/ScreenLoader";
const PlayBlock = ({ data, showCategory = true }) => {
  if (!data) {
    return <ScreenLoader />;
  }
  const { front_image, id, seasons, category_id, name, description } = data;
  const episodesNumber = seasons[0].episodes.length;
  return (
    <section className="play-block">
      <figure className="play-block__image-container">
        <img src={front_image} alt="" className="play-block__image" />
      </figure>
      <div className="play-block__details-container">
        <h5 className="play-block__details-subtitle">
          {episodesNumber} Episodios {showCategory ? "| Pelea" : ""}
        </h5>
        {/* <h5 className="play-block__details-subtitle">{Category} | 2018</h5> */}
        <h4 className="play-block__details-title">{name}</h4>
        <p className="play-block__details-description">{shortText(description)}</p>
        <Link to={`/anime/${id}`}>
          <motion.div whileHover={{ scale: 1.1 }} style={{ cursor: "pointer" }} className="play-block__details-button">
            Reproducir <FaPlay />
          </motion.div>
        </Link>
      </div>
      {/* <div className="play-block__gradient-background"></div> */}
    </section>
  );
};

export default PlayBlock;
