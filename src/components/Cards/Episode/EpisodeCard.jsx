import "./EpisodeCard.css";
import { shortText } from "../../../utils/shortText";
import { motion } from "framer-motion";
import { useState } from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const EpisodeCard = ({ data, index, route }) => {
  console.log(data);
  const [isHover, setIsHover] = useState(false);

  const { image, link, synopsis } = data;
  const episodeNumber = index + 1;
  const [episodeName] = Object.values(data);
  const shortSynopsis = shortText(synopsis);

  return (
    <Link to={`/anime/${route}-${index}`}>
      <motion.div className="episode__card" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} animate={{ scale: isHover ? 1.03 : 1 }}>
        <figure style={{ position: "relative" }}>
          <motion.img
            src={image}
            alt=""
            style={{ height: "100px", objectFit: "cover", marginBottom: "10px", borderRadius: "5px" }}
            className="episode__image"
            animate={{ boxShadow: isHover ? "0px 0px 0px 5px #fff, rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px" : "10px 10px 10px rgba(0, 0, 0, 0.5)", transition: { ease: "easeOut" } }}
          />
          <motion.div style={{ position: "absolute", bottom: "0.5rem", left: "0.5rem", fontSize: "2rem" }} animate={{ opacity: isHover ? 1 : 0 }}>
            <BsFillPlayCircleFill />
          </motion.div>
        </figure>
        <div className="episode__details">
          <h3 className="episode__title">
            {episodeNumber}. {episodeName}
          </h3>
          <p className="episode__synopsis">{shortSynopsis}</p>
        </div>
      </motion.div>
    </Link>
  );
};

export default EpisodeCard;
