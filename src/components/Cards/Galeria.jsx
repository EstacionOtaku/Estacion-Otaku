import React from "react";
import "../../styles/css/Galeria.css";
import { Link } from "react-router-dom";

const Galeria = ({ data }) => {
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  const numeroRandom = getRandomArbitrary(1, 50);
  const dataRandom = data?.slice(numeroRandom);

  return (
    <>
      <section className="paquete-page ">
        <div className="paquete-container">
          <h2 className="paquete__title py-4">Peliculas </h2>
          {dataRandom.length === 0 ? (
            <section className="spinner-container">
              <div className="lds-heart">
                <div></div>
              </div>
              <h3 className="spinner-load">L o a d i n g . . .</h3>
            </section>
          ) : (
            <div className="paquete-despliegue">
              {dataRandom.map((element) => {
                return (
                  <article className="paquete-list-container" key={element.id}>
                    <figure className="paquete-image-container">
                      <Link to={`/anime/${element.id}`}>
                        <img src={element.image} alt={element.name} className="paquete-image zoom" />
                      </Link>
                    </figure>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Galeria;
