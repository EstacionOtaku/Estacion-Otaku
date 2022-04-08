import CategoriaCards from "../components/Cards/CategoriaCards";
import Footer from "../components/Footer/Footer";
import "../styles/scss/Inicio.scss";

import HeaderCategory from "../components/Header/HeaderCategory";
import LoMasVistoCards from "../components/Cards/LoMasVistoCards";
import Top10Cards from "../components/Cards/Top10Cards";
import Sugerencias from "../components/Cards/Sugerencias";
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
      <LoMasVistoCards></LoMasVistoCards>
      <Top10Cards></Top10Cards>
      <Sugerencias></Sugerencias>
      <Footer></Footer>
    </>
  );
};

export default Inicio;
