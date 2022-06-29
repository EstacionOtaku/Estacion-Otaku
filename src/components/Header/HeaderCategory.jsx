import "../../styles/scss/Header.scss";
import avatar from "../../assets/Header/avatar.png";
import search from "../../assets/Header/Search.png";
import arrow from "../../assets/Header/arrow-down.png";
import logo from "../../assets/Header/logo.svg";
import { useAuth } from "../../context/authContext";
import { useState } from "react";
import ModalConfig from "../modals/ModalConfig";
import { Link } from "react-router-dom";

const HeaderCategory = ({ imageHeader, setMovie }) => {
  const { user, logout } = useAuth();
  const [userModal, setUserModal] = useState(false);
  const [settingsUser, setSettingsUser] = useState(false);
  const nameUser = localStorage.getItem("nombre");

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
  const handleSettingsUser = () => {
    if (!settingsUser) {
      setSettingsUser(true);
    } else {
      setSettingsUser(false);
    }
  };
  const handleChange = (value) => {
    setMovie(value);
  };
  return (
    <header className="header  ">
      <div className="header-container ">
        <div className="header-container-logo">
          <Link to={"/inicio"}>
            <figure className="header__image-container">
              <img src={logo} className="header__image"></img>
            </figure>
          </Link>
        </div>
        <div className="header-container-login">
          <div className="input-group rounded" style={{ width: "" }}>
            <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" onChange={(e) => handleChange(e.target.value)} />
          </div>
          <figure className="header__search-container">
            <img src={search} className="search__image"></img>
          </figure>
          <p className="header__username">{user.displayName || nameUser || user.email}</p>
          <Link to="/avatar">
            <figure className="header__avatar-container">
              <img src={imageHeader} className="avatar__image"></img>
            </figure>
          </Link>
          <button className="header__avatar-options" onClick={handleUserOptions}>
            <figure className="header__arrow-container">
              <img src={arrow} className="arrow__image"></img>
            </figure>
          </button>

          {settingsUser && <ModalConfig />}
          {userModal && (
            <div className="header__modal-user">
              <button className="header__button-logout" onClick={handleSettingsUser}>
                Editar Cuenta
              </button>

              <button className="header__button-logout" onClick={handleLogout}>
                Cerrar Sesión
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderCategory;
