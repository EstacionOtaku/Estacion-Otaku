import animeGroup from "../assets/Hero/anime_group.png";
import CtaButton from "./Buttons/CtaButton.jsx";
import "../styles/css/Hero.css";
import animeOne from "../assets/Hero/anime_1.png";
import animeTwo from "../assets/Hero/anime_2.png";
import { useEffect } from "react";
import { useAnimation, useViewportScroll, motion, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useVisibleOnce } from "../hooks/useVisible";

const fasterDuration = {
  visible: { opacity: 1, transition: { duration: 0.4 } },
  hidden: { opacity: 0 },
};
const normalDuration = {
  visible: { opacity: 1, transition: { duration: 1 } },
  hidden: { opacity: 0 },
};
const ctaImageVariant = {
  visible: { opacity: 1, transition: { duration: 1, delay: 0.5 }, y: 0 },
  hidden: { opacity: 0, y: 100 },
};
const Hero = () => {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, 200]);
  const y2 = useTransform(scrollY, [0, 600], [0, -200]);
  const control = useAnimation();
  const controlOnce = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  useVisibleOnce(controlOnce, inView);
  return (
    <>
      <section className="hero">
        <div className="hero-wrapper">
          <motion.h1 className="hero__cta-text" ref={ref} variants={fasterDuration} initial="hidden" animate={controlOnce}>
            Tus animes favoritos, <br />
            en un solo lugar
          </motion.h1>
          <motion.div ref={ref} variants={normalDuration} initial="hidden" animate={controlOnce}>
            <CtaButton text="Únete gratis" />
          </motion.div>
        </div>
        <figure className="hero__image-container">
          <motion.img src={animeGroup} alt="" className="hero__image" variants={ctaImageVariant} initial="hidden" animate="visible" />
          <motion.img src={animeOne} style={{ y: y1, x: y1, top: -156, left: -235 }} alt="" className="animeOne float selector " ref={ref} variants={normalDuration} initial="hidden" animate={control} />
          <motion.img src={animeTwo} style={{ y: y1, x: y2, top: -56, right: -235 }} alt="" className="animeTwo float" ref={ref} variants={normalDuration} initial="hidden" animate={control} />
        </figure>

        {/* <div className="hero__gradient-background"></div> */}
        {/* <figure className="mobile-hero__image-container">
          <img className="hero__image" src={mobileHeroImage} />
        </figure> */}

        {/* <figure className="hero__decoration-left-image-container">
          <img src={mobileDecorationImageLeft} alt="" className="hero__decoration-left-image" />
        </figure>
        <figure className="hero__decoration-right-image-container">
          <img src={mobileDecorationImageRight} alt="" className="hero__decoration-right-image" />
        </figure> */}

        <div className="hero__transparency-layer-hero"></div>
      </section>
    </>
  );
};

export default Hero;

/**
 * 
 * import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
};

const Box = ({ num }) => {

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <h1>Box {num} </h1>
    </motion.div>
  );
};

 */
