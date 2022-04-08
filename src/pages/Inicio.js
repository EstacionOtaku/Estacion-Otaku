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
      <section className="py-1 px-2 mx-auto" style={{ maxWidth: "1600px" }}>
        <CategoriaCards></CategoriaCards>
      </section>
      <section className="py-1 px-2 mx-auto" style={{ maxWidth: "1600px" }}>
        <LoMasVistoCards></LoMasVistoCards>
      </section>
      <section className="py-1 px-2 mx-auto" style={{ maxWidth: "1600px" }}>
        <Top10Cards></Top10Cards>
      </section>
      <section className="py-1 px-2 mx-auto" style={{ maxWidth: "1600px" }}>
        <Sugerencias></Sugerencias>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Inicio;
