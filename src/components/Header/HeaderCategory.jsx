import "../../styles/scss/Header.scss";
import avatar from "../../assets/Header/avatar.png";
import search from "../../assets/Header/Search.png";
import arrow from "../../assets/Header/arrow-down.png";
import logo from "../../assets/Header/logo.png";

const HeaderCategory = () => {
  return (
    <header className="header  ">
      <div className="header-container ">
        <div className="header-container-logo">
          <figure className="header__image-container">
            <img src={logo} className="header__image"></img>
          </figure>
        </div>
        <div className="header-container-login">
          <figure className="header__search-container">
            <img src={search} className="search__image"></img>
          </figure>
          <p className="header__username">Name</p>
          <figure className="header__avatar-container">
            <img src={avatar} className="avatar__image"></img>
          </figure>
          <figure className="header__arrow-container">
            <img src={arrow} className="arrow__image"></img>
          </figure>
        </div>
      </div>
    </header>
  );
};

export default HeaderCategory;
