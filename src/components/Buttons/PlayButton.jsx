import { Link } from "react-router-dom";
import "../../styles/css/Buttons.css";

const PlayButton = ({ text }) => {
  return (
    <Link to="/game" className="hero__cta-button">
      {text}
    </Link>
  );
};

export default PlayButton;
