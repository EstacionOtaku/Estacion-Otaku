import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import useVisible from "../../hooks/useVisible";
import { multipleElVariant } from "../../utils/animationVariants";
import "./Card.css";
const Card = ({ data, index }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  useVisible(control, inView);
  return (
    <Link to="/register">
      <motion.figure className="card-container" ref={ref} variants={multipleElVariant} initial="hidden" animate={control} custom={{ delay: (index + 1) * 0.05 }} key={index} whileHover={{ scale: 1.02, transition: { duration: 0.1 } }}>
        <img className="card-image" src={data} alt="" />
      </motion.figure>
    </Link>
  );
};

export default Card;
