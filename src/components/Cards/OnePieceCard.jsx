import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/css/Spinner.css";

const OnePiece = ({ setImageHeader }) => {
  const [onePiece, setOnePiece] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/EstacionOtaku/Estacion-Otaku/develop/src/api/avatar.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setOnePiece(response.OnePiece);
        setLoading(true);
      });
  }, []);

  const handleImg = (e) => {
    setImageHeader(e.target.currentSrc);
  };
  return (
    <>
      {loading ? (
        <section className="card-cards-container">
          <div className="card-logo">
            <figure className="card-logo__image-container">
              <img
                className="card-log__image"
                src="https://i.postimg.cc/YSjdfBx8/One-Piece-Logo.png"
              ></img>
            </figure>
          </div>
          <div className="card-cards">
            {onePiece.map((element, index) => (
              <Link to="/inicio">
                <figure key={index} className="card-cards__image-container">
                  <img
                    src={element.img}
                    alt="img"
                    className="card-cards__image"
                    onClick={handleImg}
                  />
                </figure>
              </Link>
            ))}
          </div>
        </section>
      ) : (
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </>
  );
};

export default OnePiece;
