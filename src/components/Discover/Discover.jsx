import "../../styles/css/Discover.css";
import CtaButton from "../Buttons/CtaButton";
import PlayButton from "../Buttons/PlayButton";

const Discover = () => {
  return (
    <>
      <section className="discover">
        <h3 className="discover__subtitle">Descubre Estación Otaku</h3>
        <h1 className="discover__title">¿Estas listo para disfrutar?</h1>
        <h2 className="discover__text">
          Descubre Estación Otaku, la nueva aplicación web donde podrás
          disfrutar de tus animes favoritos y conocer nuevos para tu colección.
          Somos mucho más que una página, somos una comunidad de streaming para
          fans de los animes. Tenemos animes en una diversidad de categorías.
          ¿Quieres saber más?
        </h2>
        <div className="discover__button">
          <CtaButton text="Únete gratis" />
        </div>
        <h2 className="discover__juego">¿Quieres jugar memoria?</h2>
        <div className="discover__button">
          <PlayButton text="Jugar" />
        </div>
      </section>
    </>
  );
};

export default Discover;
