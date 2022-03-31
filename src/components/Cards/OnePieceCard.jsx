import { useEffect, useState } from "react";

const OnePiece = () => {
  const [onePiece, setOnePiece] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/OnePiece")
      .then((response) => {
        return response.json();
      })
      .then((onePiece) => {
        setOnePiece(onePiece);
      });
  }, []);

  const handleImg = (e) => {
    console.log(e.target.currentSrc);
  };
  return (
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
          <figure key={index} className="card-cards__image-container">
            <img src={element.img} alt="img" className="card-cards__image" onClick={handleImg} />
          </figure>
        ))}
      </div>
    </section>
  );
};

export default OnePiece;
