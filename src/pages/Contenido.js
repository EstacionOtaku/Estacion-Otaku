import { useAuth } from "../context/authContext";

import HeaderInicio from "../components/Header/HeaderInicio";
const Contenido = () => {
  return (
    <>
      <HeaderInicio />
      <img
        className="prueba_image"
        src="https://i.postimg.cc/MH2VXPvw/fondoanime.jpg"
        alt="portada"
      />
      <div>Contenido</div>
      <hr />
      <h3>Aqui estaran los carrusel, etc :V</h3>

      <h4>Bota tu gaaaaaa</h4>
    </>
  );
};

export default Contenido;
