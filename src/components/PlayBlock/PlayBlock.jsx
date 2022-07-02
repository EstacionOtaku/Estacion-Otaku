import { FaPlay } from "react-icons/fa";
import "./PlayBlock.css";
import { shortText } from "../../utils/shortText";
import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { Link } from "react-router-dom";
import ScreenLoader from "../Loaders/ScreenLoader";

const colorTransition = {
  visible: { background: "linear-gradient(180deg, rgba(6, 10, 25, 1) 0%, rgba(6, 10, 25, 0.3) 10%, rgba(6, 10, 25, 0) 20%), radial-gradient(farthest-side at 200% 21%, transparent, rgba(6, 10, 25, 1))", transition: { duration: 0.4 } },
  initial: { background: "linear-gradient(180deg, rgba(6, 10, 25, 1) 0%, rgba(6, 10, 25, 0.3) 10%, rgba(6, 10, 25, 0) 20%), radial-gradient(farthest-side at 73% 21%, transparent, rgba(6, 10, 25, 1))" },
};

const PlayBlock = ({ data, showCategory = true }) => {
  const { scrollY } = useViewportScroll();
  const control = useAnimation();
  scrollY.onChange((y) => {
    if (y > 50) {
      control.start("visible");
    } else {
      control.start("initial");
    }
  });
  if (!data) {
    return <ScreenLoader />;
  }

  const { sample_image, id, seasons, category_id, name, description } = data;
  const episodesNumber = seasons[0].episodes.length;
  return (
    <section className="play-block">
      <figure className="play-block__image-container">
        <img src={sample_image} alt="" className="play-block__image" />
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
      <motion.div className="anime__background" variants={colorTransition} initial="initial" animate={control}></motion.div>
      {/* <div className="play-block__gradient-background"></div> */}
    </section>
  );
};

export default PlayBlock;
