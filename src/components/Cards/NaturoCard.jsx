import { useEffect, useState } from "react";

const NarutoCard = () => {
  const [naruto, setNaruto] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/Naruto")
      .then((response) => {
        return response.json();
      })
      .then((naruto) => {
        setNaruto(naruto);
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
            src="https://i.postimg.cc/vmJdmq0m/5852cd5c58215f0354495f67-1.png"
          ></img>
        </figure>
      </div>
      <div className="card-cards">
        {naruto.map((element, index) => (
          <figure key={index} className="card-cards__image-container">
            <img src={element.img} alt="img" className="card-cards__image" onClick={handleImg} />
          </figure>
        ))}
      </div>
    </section>
  );
};

export default NarutoCard;
