import React from "react";
import "../../styles/css/Galeria.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Galeria = (props) => {
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  const numeroRamdom = getRandomArbitrary(1, 50);
  const dataRamdom = props.data.slice(numeroRamdom);

  console.log(dataRamdom);
  return (
    <>
      <section className="paquete-page ">
        <div className="paquete-container">
          <h2 className="paquete__title py-4">Peliculas </h2>
          {dataRamdom.length === 0 ? (
            <section className="spinner-container">
              <div className="lds-heart">
                <div></div>
              </div>
              <h3 className="spinner-load">L o a d i n g . . .</h3>
            </section>
          ) : (
            <div className="paquete-despliegue">
              {dataRamdom.map((element) => {
                console.log(element);
                return (
                  <article className="paquete-list-container" key={element.mal_id}>
                    <figure className="paquete-image-container">
                      <Link to={`/anime/${element.mal_id}`}>
                        <img src={element.image_url} alt={element.title} className="paquete-image zoom" />
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
