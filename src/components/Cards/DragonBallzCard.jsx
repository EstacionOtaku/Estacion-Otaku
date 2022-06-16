import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/css/Spinner.css";

const DragonBallz = ({ setImageHeader }) => {
  const [dragon, setDragon] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/EstacionOtaku/Estacion-Otaku/develop/src/api/avatar.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setDragon(response.DragonBallz);
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
                src="https://i.postimg.cc/sxfHf5CX/6935222-preview-1.png"
              ></img>
            </figure>
          </div>
          <div className="card-cards">
            {dragon.map((element, index) => (
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

export default DragonBallz;
