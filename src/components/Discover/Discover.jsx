import "../../styles/css/Discover.css";
import CtaButton from "../Buttons/CtaButton";
import Slider from "react-slick";
import Card from "./Card";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useVisibleOnce } from "../../hooks/useVisible";
import { multipleElVariant, normalDuration } from "../../utils/animationVariants";

const slideImages = [
  "https://img1.ak.crunchyroll.com/i/spire3/dac363972d628a7009e04fdeb9d7104a1641869274_full.jpg",
  "https://i.pinimg.com/originals/71/fa/77/71fa7797a69ef379730b64e72d3b2d9f.png",
  "https://images.justwatch.com/poster/8603866/s718/naruto-shippuden.%7Bformat%7D",
  "https://img1.ak.crunchyroll.com/i/spire1/306d782cdc9a9d358bf245aebc396fc21646741097_main.jpg",
  "https://img1.ak.crunchyroll.com/i/spire2/ab001b1cb053ec0d7b1b47b0f7bf98e71647329181_full.jpg",
  "https://img1.ak.crunchyroll.com/i/spire4/697c8b5ff2f49a97348b5507c06e11831576116356_main.jpg",
];

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  speed: 8000,

  cssEase: "ease",
  infinite: true,
  pauseOnHover: true,
};
const Discover = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  useVisibleOnce(control, inView);

  return (
    <>
      <section className="discover-container">
        <div className="discover">
          <div>
            <motion.h3 className="discover__subtitle" ref={ref} variants={multipleElVariant} initial="hidden" animate={control} custom={{ delay: 1 * 0.1 }}>
              Descubre Estación Otaku
            </motion.h3>
            <motion.h1 className="discover__title" ref={ref} variants={multipleElVariant} initial="hidden" animate={control} custom={{ delay: 2 * 0.1 }}>
              ¿Estas listo para disfrutar?
            </motion.h1>
            <motion.p className="discover__text" ref={ref} variants={multipleElVariant} initial="hidden" animate={control} custom={{ delay: 3 * 0.1 }}>
              Descubre Estación Otaku, la nueva aplicación web donde podrás disfrutar de tus animes favoritos y conocer nuevos para tu colección. Somos mucho más que una página, somos una comunidad de streaming para fans de los animes. Tenemos animes en una diversidad de categorías. ¿Quieres saber
              más?
            </motion.p>
          </div>
          <motion.div className="discover__button" ref={ref} variants={normalDuration} initial="hidden" animate={control}>
            <CtaButton text="Únete gratis" />
          </motion.div>
        </div>
        <Slider {...settings}>
          {slideImages.map((data, index) => (
            <Card data={data} index={index} key={index} />
          ))}
        </Slider>
      </section>
    </>
  );
};

export default Discover;
