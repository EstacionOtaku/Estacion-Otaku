import "../../styles/scss/Header.scss";
import logo from "../../assets/Header/logo.png";

const HeaderLanding = () => {
  return (
    <header className="header  ">
      <div className="header-container ">
        <figure className="header__image-container">
          <img src={logo} className="header__image"></img>
        </figure>
        <button className="header__button">Iniciar Sesion</button>
      </div>
    </header>
  );
};

export default HeaderLanding;
