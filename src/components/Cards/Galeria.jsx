import "../../styles/css/Galeria.css";
import StarPage from "../../pages/StartPage"
import { useState, useEffect } from "react";

const Galeria = (props) => {

  return (
    <>
      <section className="paquete-page">
        <div className="paquete-container">
          <h2 className="paquete__title"> </h2>
          {props.data.length === 0 ? (
            <section className="spinner-container">
              <div className="lds-heart">
                <div></div>
              </div>
              <h3 className="spinner-load">L o a d i n g . . .</h3>
            </section>
          ) : (
            <div className="paquete-despliegue" >
              {props.data.map(({ image_url, title,mal_id }) => {
                return (
                  <article className="paquete-list-container" key={mal_id} >
                    <figure className="paquete-image-container">
                      <a href="https://www.google.com/"> <img src={image_url} alt={title} className="paquete-image zoom" /> </a>
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