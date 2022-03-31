import "../../styles/scss/Header.scss";
import logo from "../../assets/Header/logo.png";
import { Link } from "react-router-dom";

const HeaderLanding = () => {
  return (
    <header className="header  ">
      <div className="header-container ">
        <figure className="header__image-container">
          <img src={logo} className="header__image"></img>
        </figure>
        <Link to="/login" className="header__button">Iniciar Sesion</Link>
      </div>
    </header>
  );
};

export default HeaderLanding;
