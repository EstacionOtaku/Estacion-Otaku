import { useEffect, useState } from "react";

const DemonCard = () => {
  const [demon, setDemon] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/Demon")
      .then((response) => {
        return response.json();
      })
      .then((demon) => {
        setDemon(demon);
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
            src="https://i.postimg.cc/6qCj2VhX/Demon-Slayer-Logo-1.png"
          ></img>
        </figure>
      </div>
      <div className="card-cards">
        {demon.map((element, index) => (
          <figure key={index} className="card-cards__image-container">
            <img src={element.img} alt="img" className="card-cards__image" onClick={handleImg} />
          </figure>
        ))}
      </div>
    </section>
  );
};

export default DemonCard;
