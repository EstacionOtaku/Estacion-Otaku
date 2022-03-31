import { useEffect, useState } from "react";

const AttackTitanCard = () => {
  const [titan, setTitan] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/Titan")
      .then((response) => {
        return response.json();
      })
      .then((titan) => {
        setTitan(titan);
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
            src="https://i.postimg.cc/6qxzX2x1/Attack-On-Titan-Word-Logo-Transparent-PNG-1.png"
          ></img>
        </figure>
      </div>
      <div className="card-cards">
        {titan.map((element, index) => (
          <figure key={index} className="card-cards__image-container">
            <img src={element.img} alt="img" className="card-cards__image" onClick={handleImg} />
          </figure>
        ))}
      </div>
    </section>
  );
};

export default AttackTitanCard;
