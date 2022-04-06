import "../../styles/css/LandingSubscribe.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import CtaButton from "../Buttons/CtaButton";
const LandingSubscribe = () => {
  return (
    <section className="subscribe-container">
      <p className="subscribe__text">
        ¿Quieres ver <span className="subscribe__text-bold">Estación Otaku</span> ya?
        <br /> Crea tu cuenta gratis ahora.
      </p>

      <CtaButton text="Únete gratis" />
    </section>
  );
};

export default LandingSubscribe;
