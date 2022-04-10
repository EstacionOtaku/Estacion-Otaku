import { Link } from "react-router-dom";
import "../../styles/css/Buttons.css";

const NosotrosButton = ({ text }) => {
  return (
    <Link to="/nosotros" className="hero__cta-button">
      {text}
    </Link>
  );
};

export default NosotrosButton;
