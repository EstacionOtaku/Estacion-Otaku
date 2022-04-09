import "../../styles/css/Galeria.css";
import { Link } from "react-router-dom";

const Galeria = (props) => {
  // const data = props.data;

  // const filtered = data.filter(function (element) {
  //   return element.Category == "Drama";
  // });

  // console.log(filtered);
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
            <div className="paquete-despliegue">
              {props.data.map(({ image_url, title, mal_id }) => {
                return (
                  <article className="paquete-list-container" key={mal_id}>
                    <figure className="paquete-image-container">
                      <Link to={`/anime/${mal_id}`}>
                        <img src={image_url} alt={title} className="paquete-image zoom" />
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
