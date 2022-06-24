import animeGroup from "../assets/Hero/anime_group.png";
import CtaButton from "./Buttons/CtaButton.jsx";
import "../styles/css/Hero.css";
import animeOne from "../assets/Hero/anime_1.png";
import animeTwo from "../assets/Hero/anime_2.png";
import { useAnimation, useViewportScroll, motion, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useVisible, { useVisibleOnce } from "../hooks/useVisible";
import { useIsLarge, useIsMedium, useIsSmall } from "../hooks/useMediaQuery";

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

  const isSmall = useIsSmall();
  const isMedium = useIsMedium();
  const isLarge = useIsLarge();

  useVisible(control, inView);
  useVisibleOnce(controlOnce, inView);

  const scaleAnimatedEl = () => (isSmall ? 0.4 : isMedium ? 0.6 : isLarge ? 0.9 : 0.9);

  return (
    <>
      <section className="hero">
        <div className="hero-wrapper">
          <motion.h1 className="hero__cta-text" ref={ref} variants={fasterDuration} initial="hidden" animate="visible">
            Tus animes favoritos, <br />
            en un solo lugar
          </motion.h1>
          <motion.div ref={ref} variants={normalDuration} initial="hidden" animate="visible">
            <CtaButton text="Únete gratis" />
          </motion.div>
        </div>
        <figure className="hero__image-container">
          <motion.img src={animeGroup} alt="" className="hero__image" variants={ctaImageVariant} initial="hidden" animate="visible" />
          <motion.img src={animeOne} style={{ y: y1, x: y1, top: -156, left: -235, scale: scaleAnimatedEl() }} alt="" className="animeOne float selector " ref={ref} variants={normalDuration} initial="hidden" animate={control} />
          <motion.img src={animeTwo} style={{ y: y1, x: y2, top: -56, right: -235, scale: scaleAnimatedEl() }} alt="" className="animeTwo float" ref={ref} variants={normalDuration} initial="hidden" animate={control} />
        </figure>

        <div className="hero__transparency-layer-hero"></div>
      </section>
    </>
  );
};

export default Hero;
