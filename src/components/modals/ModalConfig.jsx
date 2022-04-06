import logo from "../../assets/Header/logo.png";
import avatar from "../../assets/Header/avatar.png";
import "../../styles/scss/ModalConfig.scss";
import arrowLeft from "../../assets/Header/arrow-left.png";

const ModalConfig = ({nameUser}) => {

  const handleReturn = () => {
    
  }


  return (
    <section className="modal">
      <section className="modal-container">
        <div className="modal-behind">
          <figure className="modal-behind__image-container">
            <img src={logo} className="modal-behind__image" alt="logo"></img>
          </figure>
          <div className="modal-behind-text">
            <figure className="modal-behind-text__image-container">
              <img src={arrowLeft} className="modal-behind-text__image" alt="arrowLeft"></img>
            </figure>
            <button className="modal-behind-text__atras" onClick={handleReturn}>Atras</button>
          </div>
        </div>
        <div className="modal-about">
          <h1 className="modal-about__title">Configuracion de la cuenta</h1>
          <h3 className="modal-about__edit">Edita tu perfil</h3>
          <div className="modal-about-description">
            <figure className="modal-about-description__image-container">
              <img className="modal-about-description__image" src={avatar} alt="avatar"></img>
            </figure>
            <div className="modal-about-description-name">
              <label className="modal-about-description-name__label">
                Ingrese tu Nombre de Perfil
              </label>
              <input
                className="modal-about-description-name__input"
                placeholder="nombre localstorage"
                value={nameUser}
              ></input>
            </div>
          </div>
          <h3 className="modal-about__password">Cambia la contraseña de tu cuenta</h3>
          <input
            className="modal-about__input"
            type="text"
            placeholder="Ingresa la contraseña actual"
          ></input>
          <input
            type="text"
            className="modal-about__input"
            placeholder="Ingresa la nueva contraseña"
          ></input>
          <div className="modal-about-button-container">
            <button className="modal-about-button__save">Guardar</button>
            <button className="modal-about-button__remove">Eliminar Cuenta</button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ModalConfig;
