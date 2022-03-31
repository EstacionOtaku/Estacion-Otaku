import Portada from "../assets/Avatar/Portada.png";
import logo from "../assets/Header/logo.png";
import "../styles/scss/Avatar.scss";

const Avatar = () => {
  return (
    <>
      <section className="portada">
        <figure className="portada__image-contaiener">
          <img src={Portada} className="portada__image"></img>
        </figure>
      </section>
      <section className="title">
        <figure className="title__image-container">
          <img src={logo} className="title__image"></img>
        </figure>
        <h1 className="title__title-avatar">Eligue a tu Avatar</h1>
        <p className="title__title-description">
          Elige un avatar de alguno de los animes mas populares para tu cuenta
        </p>
      </section>
    </>
  );
};

export default Avatar;
