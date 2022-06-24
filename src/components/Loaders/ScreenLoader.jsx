import logo from "../../assets/Business/logo-center.svg";
import Spinner from "./Spinner";
import "./ScreenLoader.css";
const ScreenLoader = () => {
  return (
    <section className="screen-section">
      <figure className="screen-image-container">
        <img className="screen-image" src={logo} alt="" />
      </figure>
      <div className="screen-spinner">
        <Spinner />
      </div>
    </section>
  );
};

export default ScreenLoader;
