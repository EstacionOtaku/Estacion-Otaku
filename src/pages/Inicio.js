import CategoriaCards from "../components/Cards/CategoriaCards";
import Footer from "../components/Footer/Footer";
import "../styles/scss/Inicio.scss";

import HeaderCategory from "../components/Header/HeaderCategory";
const Inicio = () => {
  return (
    <>
      <HeaderCategory></HeaderCategory>
      <img
        className="prueba_image"
        src="https://i.postimg.cc/MH2VXPvw/fondoanime.jpg"
        alt="portada"
      />
      <CategoriaCards></CategoriaCards>
      <Footer></Footer>
    </>
  );
};

export default Inicio;
