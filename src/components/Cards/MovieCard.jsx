import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const MovieCard = ({ image_url, mal_id }) => {
  return (
    <motion.div style={{ textAlign: "center" }} whileHover={{ scale: 1.1, transition: { duration: 0.4 } }}>
      <Link to={`/anime/${mal_id}`}>
        <img
          className="card__multi-image_url"
          src={image_url}
          alt="movie"
          style={{
            width: "180px",
            height: "280px",
            objectFit: "cover",
            marginBottom: "10px",
            borderRadius: "20px",
          }}
        />
      </Link>
    </motion.div>
  );
};

export default MovieCard;
