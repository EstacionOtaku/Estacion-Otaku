import { FaPlay } from "react-icons/fa";
import "./PlayBlock.css";
import { motion } from "framer-motion";
const PlayBlock = ({ data }) => {
  const { Category, image_url, title } = data;
  return (
    <section className="play-block">
      <figure className="play-block__image-container">
        <img src={image_url} alt="" className="play-block__image" />
      </figure>
      <div className="play-block__details-container">
        <h5 className="play-block__details-subtitle">{Category} | 2018</h5>
        <h4 className="play-block__details-title">{title}</h4>
        <motion.a whileHover={{ scale: 1.2 }} style={{ cursor: "pointer" }} className="play-block__details-button">
          Reproducir <FaPlay />
        </motion.a>
      </div>
      {/* <div className="play-block__gradient-background"></div> */}
    </section>
  );
};

export default PlayBlock;
