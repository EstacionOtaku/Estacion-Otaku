import { Link } from "react-router-dom";
import "../../styles/css/Buttons.css";

const CtaButton = ({ text }) => {
  return (
    <Link to="/register" className="hero__cta-button">
      {text}
    </Link>
  );
};

export default CtaButton;
