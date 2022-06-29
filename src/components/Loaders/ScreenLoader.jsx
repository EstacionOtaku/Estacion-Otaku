import logo from "../../assets/Business/logo-center.svg";
import Spinner from "./Spinner";
import { motion } from "framer-motion";
import "./ScreenLoader.css";
const ScreenLoader = () => {
  return (
    <motion.section className="screen-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <figure className="screen-image-container">
        <img className="screen-image" src={logo} alt="" />
      </figure>
      <div className="screen-spinner">
        <Spinner />
      </div>
    </motion.section>
  );
};

export default ScreenLoader;
