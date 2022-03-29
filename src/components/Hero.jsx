import mobileHeroImage from "../assets/images/mobile-hero-image.png";
import mobileDecorationImageRight from "../assets/images/hero-anime-right.png";
import mobileDecorationImageLeft from "../assets/images/hero-anime-left.png";

import "../styles/css/Hero.css";
const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-wrapper">
          <h1 className="hero__cta-text">Tus animes favoritos en un solo lugar</h1>
          <a className="hero__cta-button" href="">
            Únete gratis
          </a>
        </div>
        <div className="hero__gradient-background"></div>
        <figure className="mobile-hero__image-container">
          <img className="hero__image" src={mobileHeroImage} />
        </figure>

        <figure className="hero__decoration-left-image-container">
          <img src={mobileDecorationImageLeft} alt="" className="hero__decoration-left-image" />
        </figure>
        <figure className="hero__decoration-right-image-container">
          <img src={mobileDecorationImageRight} alt="" className="hero__decoration-right-image" />
        </figure>
        <div className="hero__transparency-layer-hero"></div>
      </section>
      <section className="section"></section>
    </>
  );
};

export default Hero;
