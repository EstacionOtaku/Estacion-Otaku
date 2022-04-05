import "../styles/scss/Nosotros.scss";
import HeaderInicio from "../components/Header/HeaderInicio";
import Portada from "../assets/Nosotros/portada.png";
import Logo from "../assets/Nosotros/nk.png";

import Footer from "../components/Footer/Footer";
import FormNosotros from "../components/Form/FormNosotros";
import NosotrosCards from "../components/Cards/NosotrosCards";
import CarruselInfoNosotros from "../components/Carrusel/CarruselInfoNosotros";

const Nosotros = () => {
  return (
    <>
      <HeaderInicio></HeaderInicio>
      <img class="portada" src={Portada} alt="portada" />
      <article class="container d-flex align-items-center justify-content-center alto-50 text-white mb-5">
        <img src={Logo} alt="nekocoders" />
        <div class="ps-3 ">
          <h4 class="m-0 p-2 h2">Sobre Nosotros</h4>
          <p class="m-0 p-2 fs-5">
            Nuestro sueño es crear una plataforma de streaming peruana que sea
            low-cost y accesible para estudiantes amantes de la cultura japonesa
            donde puedan encontrar contenido relacionado a series y peliculas de
            Anime para que puedan disfrutar de la mejor experiencia en un solo
            lugar.
          </p>
        </div>
      </article>
      <CarruselInfoNosotros></CarruselInfoNosotros>
      <NosotrosCards></NosotrosCards>
      <FormNosotros></FormNosotros>
      <Footer></Footer>
    </>
  );
};

export default Nosotros;
