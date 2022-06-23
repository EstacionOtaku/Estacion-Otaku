import ctaDevice from "../../assets/Info/device_car_eng.png";
import "./Info.css";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import useVisible from "../../hooks/useVisible";

const infoData = ["Disfruta de todo nuestro contenido en un solo lugar y vive una experiencia diseñada especialmente para ti", "Te acompañamos donde quiera que vayas para que no te pierdas ninguna de nuestras novedades", "Ponemos a tu disposición más de 100 series y peliculas de anime."];

const textVariants = {
  hidden: {
    opacity: 0,
  },
  visible: ({ delay }) => ({
    opacity: 1,
    transition: {
      delay,
      duration: 1,
    },
  }),
};

const titleVariant = {
  visible: { opacity: 0, transition: { duration: 0.4 } },
  hidden: { opacity: 1 },
};

const Info = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  useVisible(control, inView);
  return (
    <section className="info">
      <motion.h4 className="info-title" ref={ref} variants={titleVariant} initial="hidden" animate={control} layout>
        Una experiencia sencilla y <br /> completa para ti
      </motion.h4>
      <figure className="info-image-container">
        <img className="info-image" src={ctaDevice} alt="" />
      </figure>
      <div className="details-container">
        {infoData.map((data, index) => (
          <motion.p ref={ref} variants={textVariants} initial="hidden" animate={control} layout custom={{ delay: (index + 2) * 0.06 }} className="details__text" key={index}>
            {data}
          </motion.p>
        ))}
      </div>
    </section>
  );
};

export default Info;
