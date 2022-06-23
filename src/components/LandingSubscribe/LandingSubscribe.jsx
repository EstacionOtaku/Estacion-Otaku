import "../../styles/css/LandingSubscribe.css";
import { MdEmail } from "react-icons/md";
import { useVisibleOnce } from "../../hooks/useVisible";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const normalDuration = {
  visible: { opacity: 1, transition: { duration: 1, delay: 0.5 } },
  hidden: { opacity: 0 },
};
const LandingSubscribe = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  useVisibleOnce(control, inView);
  return (
    <motion.section style={{ background: "#060a19" }} ref={ref} variants={normalDuration} initial="hidden" animate={control}>
      <div className="subscribe-container">
        <div className="subscribe-text__container">
          <h3 className="subscribe__title">Recibe nuestras ultimas novedades</h3>
          <p className="subscribe__detail">Infórmate de las novedades y promociones que tenemos</p>
        </div>
        <form action="" className="subscribe-form">
          <div className="subscribe-input_container">
            <MdEmail className="input-icon" />
            <input type="email" placeholder="Email" className="subscribe-input" />
          </div>
          <button className="subscribe-button">Suscribirse</button>
        </form>
      </div>
    </motion.section>
  );
};

export default LandingSubscribe;
