import { useEffect, useState } from "react";
import "../../styles/css/Spinner.css";

const NarutoCard = () => {
  const [naruto, setNaruto] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/Naruto")
      .then((response) => {
        return response.json();
      })
      .then((naruto) => {
        setNaruto(naruto);
        setLoading(true);
      });
  }, []);

  const handleImg = (e) => {
    console.log(e.target.currentSrc);
  };
  return (
    <>
      {loading ? (
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
                <img
                  src={element.img}
                  alt="img"
                  className="card-cards__image"
                  onClick={handleImg}
                />
              </figure>
            ))}
          </div>
        </section>
      ) : (
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </>
  );
};

export default NarutoCard;
