import "../../styles/scss/Header.scss";
import search from "../../assets/Header/Search.png";
import arrow from "../../assets/Header/arrow-down.png";
import avatar from "../../assets/Header/avatar.png";
import logo from "../../assets/Header/logo.png";
import { useAuth } from "../../context/authContext";
import { Link } from "react-router-dom";
import { useState } from "react";

const HeaderInicio = () => {

  const { user, logout } = useAuth();
  const [userModal, setUserModal] = useState(false)
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };
  const handleUserOptions = () => {
    if (!userModal){
      setUserModal(true);
    }
    else {
      setUserModal(false);
    }
  }
  return (
    <header className="header  ">
      <div className="header-container ">
        <div className="header-container-logo">
          <figure className="header__image-container">
            <img src={logo} className="header__image"></img>
          </figure>
          <select
            name="Generos"
            id="generos-select
        
        "
            className="header__select"
          >
            <option value="">Generos</option>
            <option value="aventura">Aventura</option>
            <option value="Ciencia Ficcion">Ciencia Ficcion</option>
            <option value="Comedia">Comedia</option>
            <option value="Deportes">Deportes</option>
            <option value="Drama">Drama</option>
            <option value="Fantasia">Fantasia</option>
            <option value="Kids">Kids</option>
            <option value="Militar">Militar</option>
            <option value="Pelea">Pelea</option>
            <option value="Misterio">Misterio</option>
            <option value="Policial">Policial</option>
            <option value="Psicologico">Psicologico</option>
            <option value="Slice of Life">Slice of Life</option>
            <option value="Terror">Terror</option>
          </select>
        </div>
        <div className="header-container-login">
          <figure className="header__search-container">
            <img src={search} className="search__image"></img>
          </figure>
          <p className="header__username">{user.displayName || user.email}</p>
          <figure className="header__avatar-container">
            <img src={avatar} className="avatar__image"></img>
          </figure>
          <button
            className="header__avatar-options"
            onClick={handleUserOptions}
          >
            <figure className="header__arrow-container">
              <img src={arrow} className="arrow__image"></img>
            </figure>
          </button>

          {userModal && (
            <div className="header__modal-user">
              <Link to="/settings-acount" className="header__button-logout">Editar Cuenta</Link>
              <button className="header__button-logout" onClick={handleLogout}>Cerrar Sesión</button>
            </div>
          )}  
        </div>
      </div>
    </header>
  );
};

export default HeaderInicio;
