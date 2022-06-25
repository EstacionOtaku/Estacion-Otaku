import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

import "./Back.css";

const BackButton = ({ route }) => {
  return (
    <div className="back--button">
      <Link to={route}>
        <IoMdArrowBack className="back-icon" /> <span className="back-text">Atrás</span>
      </Link>
    </div>
  );
};

export default BackButton;
