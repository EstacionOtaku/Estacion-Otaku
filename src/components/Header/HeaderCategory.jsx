import "../../styles/scss/Header.scss";
import avatar from "../../assets/Header/avatar.png";
import search from "../../assets/Header/Search.png";
import arrow from "../../assets/Header/arrow-down.png";
import logo from "../../assets/Header/logo.png";
import { useAuth } from "../../context/authContext";
import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderCategory = ({imageHeader}) => {
  const { user, logout } = useAuth();
  const [userModal, setUserModal] = useState(false);
  const nameUser = localStorage.getItem('nombre');
  
  imageHeader = localStorage.getItem("image-url-header")
  console.log(imageHeader);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };
  const handleUserOptions = () => {
    if (!userModal) {
      setUserModal(true);
    } else {
      setUserModal(false);
    }
  };
  return (
    <header className="header  ">
      <div className="header-container ">
        <div className="header-container-logo">
          <figure className="header__image-container">
            <img src={logo} className="header__image" alt="logo"></img>
          </figure>
        </div>
        <div className="header-container-login">
          <figure className="header__search-container">
            <img src={search} className="search__image" alt="search"></img>
          </figure>
          <p className="header__username">{nameUser || user.email}</p>
          <figure className="header__avatar-container">
            <img src={imageHeader} className="avatar__image" alt="avatar"></img>
          </figure>
          <button
            className="header__avatar-options"
            onClick={handleUserOptions}
          >
            <figure className="header__arrow-container">
              <img src={arrow} className="arrow__image" alt="arrow"></img>
            </figure>
          </button>

          {userModal && (
            <div className="header__modal-user">
              <Link to="/ajustes-usuario" className="header__button-logout">Editar Cuenta</Link>
              <button className="header__button-logout" onClick={handleLogout}>Cerrar Sesión</button>
            </div>
          )}  
        </div>
      </div>
    </header>
  );
};

export default HeaderCategory;
