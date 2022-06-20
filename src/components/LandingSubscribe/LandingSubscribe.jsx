import "../../styles/css/LandingSubscribe.css";
import { MdEmail } from "react-icons/md";

const LandingSubscribe = () => {
  return (
    <section className="subscribe-container">
      <div className="subscribe-text__container">
        <h3 className="subscribe__title">Recibe nuestras ultimas novedades</h3>
        <p className="subscribe__detail">Infórmate de las novedades y promociones que tenemos</p>
      </div>
      <form action="" className="subscribe-form">
        <div className="subscribe-input_container">
          <MdEmail className="input-icon" />
          <input type="email" placeholder="Email" className="subscribe-input" />
        </div>
        <button className="subscribe-button">Suscribirse</button>
      </form>
    </section>
  );
};

export default LandingSubscribe;
