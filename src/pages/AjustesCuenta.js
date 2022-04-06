import HeaderInicio from "../components/Header/HeaderInicio";
import logo from "../assets/Header/logo.png";
import "../styles/scss/AjusteCuenta.scss";
import arrowLeft from "../assets/Header/arrow-left.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/authContext";
import ModalAvatar from "../components/modals/ModalAvatar";

const AjustesCuenta = ({setImageHeader}) => {
  const { user, resetPassword } = useAuth();
  const nameUser = localStorage.getItem("nombre");
  const [newName, setNewName] = useState("");
  const [changeName, setChangeName] = useState("");
  const [modalAvatar, setModalAvatar] = useState(false);

  const inputUserName = document.getElementById("username");
  const otheravatar = localStorage.getItem("image-url-header");
  console.log(otheravatar);

  const handleChange = (e) => {
    const nuevoNombre = e.target.value;
    setNewName(nuevoNombre);
  };

  const handleSubmit = (e) => {
    if (!inputUserName.disabled) {
      e.preventDefault();
      localStorage.setItem("nombre", newName);
      setChangeName(newName);
    }
  };

  const handleSwapAvartar = () => {
    if (!modalAvatar){
      setModalAvatar(true);
    }
  }



  const handleResetPassword = async () => {
    try {
      await resetPassword(user.email);
      alert("Se envio un mensaje a su correo para restablecer su contraseña");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <HeaderInicio />
      <section className="user-settings">
        <section className="user-settings-container">
          <div className="user-settings-behind">
            <figure className="user-settings-behind__image-container">
              <img
                src={logo}
                className="user-settings-behind__image"
                alt="logo"
              ></img>
            </figure>
            <div className="user-settings-behind-text">
              <figure className="user-settings-behind-text__image-container">
                <img
                  src={arrowLeft}
                  className="user-settings-behind-text__image"
                  alt="arrowLeft"
                ></img>
              </figure>
              <Link className="user-settings-behind-text__atras" to="/inicio">
                Atras
              </Link>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="user-settings-about">
              <h1 className="user-settings-about__title">
                Configuracion de la cuenta
              </h1>
              <h3 className="user-settings-about__edit">Edita tu perfil</h3>
              <div className="user-settings-about-description">
                
                  <button className="user-settings-about-description__image-container" onClick={handleSwapAvartar}>
                    <img
                      className="user-settings-about-description__image"
                      src={otheravatar}
                      alt="avatar"
                    ></img>
                  </button>
                {modalAvatar && (<ModalAvatar setImageHeader={setImageHeader}/>)}
                <div className="user-settings-about-description-name">
                  <label className="user-settings-about-description-name__label">
                    Nombre de perfil
                  </label>
                  <input
                    className="user-settings-about-description-name__input"
                    placeholder={nameUser}
                    name="username"
                    id="username"
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
              <h3 className="user-settings-about__password">
                Datos de la Cuenta
              </h3>

              <label htmlFor="">Correo:</label>
              <input
                className="user-settings-about__input"
                type="text"
                value={user.email}
                disabled
              ></input>

              <label htmlFor="">Contraseña:</label>
              <input
                className="user-settings-about__input"
                type="text"
                placeholder="********"
                disabled
              ></input>
              <a
                href="#!"
                onClick={handleResetPassword}
                className="forgot-passoword-register"
              >
                Cambiar Contraseña
              </a>
              <div className="user-settings-about-button-container">
                <button className="user-settings-about-button__save">
                  Guardar
                </button>
              </div>
            </div>
          </form>
        </section>
      </section>
    </>
  );
};

export default AjustesCuenta;
