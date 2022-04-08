import "../../styles/scss/Header.scss";
import search from "../../assets/Header/Search.png";
import arrow from "../../assets/Header/arrow-down.png";
import avatar from "../../assets/Header/avatar.png";
import logo from "../../assets/Header/logo.png";
import { Link } from "react-router-dom";

const HeaderSearch = (imageHeader) => {
  return (
    <header className="header  ">
      <div className="header-container ">
        <div className="header-container-logo">
          <figure className="header__image-container">
            <img src={logo} className="header__image"></img>
          </figure>
        </div>
        <div className="header-container-login">
          <input
            type="text"
            placeholder="Titulo, categorias"
            className="header-container__search"
          ></input>
          <Link to="/avatar">
            <figure className="header__avatar-container">
              <img src={imageHeader.imageHeader} className="avatar__image"></img>
            </figure>
          </Link>
          <figure className="header__arrow-container">
            <img src={arrow} className="arrow__image"></img>
          </figure>
        </div>
      </div>
    </header>
  );
};

export default HeaderSearch;
