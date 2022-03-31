import { useEffect, useState } from "react";

const DragonBallz = () => {
  const [dragon, setDragon] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/DragonBallz")
      .then((response) => {
        return response.json();
      })
      .then((dragon) => {
        setDragon(dragon);
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
            src="https://i.postimg.cc/sxfHf5CX/6935222-preview-1.png"
          ></img>
        </figure>
      </div>
      <div className="card-cards">
        {dragon.map((element, index) => (
          <figure key={index} className="card-cards__image-container">
            <img src={element.img} alt="img" className="card-cards__image" onClick={handleImg} />
          </figure>
        ))}
      </div>
    </section>
  );
};

export default DragonBallz;
