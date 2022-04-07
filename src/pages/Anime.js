import Footer from "../components/Footer/Footer";
import HeaderCategory from "../components/Header/HeaderCategory";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/css/Anime.css";

const Anime = () => {
  const { id } = useParams();

  const [infoAnime, setInfoAnime] = useState([]);

  useEffect(() => {
    const apiAnimes = async () => {
      try {
        const response = await fetch(
          "https://api.jsonbin.io/b/624b9e67fdd14a0f46801c48"
        );
        const data = await response.json();
        const animeSelected = data.results.filter(function (element) {
          return element.mal_id == id;
        });
        setInfoAnime(animeSelected);
        console.log(infoAnime);

      } catch (error) {
        console.log(error);
      } finally {

      }
    };

    apiAnimes();
  }, []);

  // //const animeSelected = infoAnime.filter(function (element) {
  //   return element.mal_id == id;
  // });

  // const episodes = animeSelected[0];
  // console.log(episodes);

  return (
    <>
      <HeaderCategory></HeaderCategory>
      <img
        className="prueba_image"
        src="https://i.postimg.cc/MH2VXPvw/fondoanime.jpg"
        alt="portada"
      />
      
      <div className="anime">
        <h2>anime - {id}</h2>
      </div>

      
      <div className="episodes-container">

        <div className="episode" >
        <div>
        <h2>Episodios</h2>
      </div>

          {infoAnime.map(({ image, synopsis, mal_id, episodes }) => {
            return (
              <article className="paquete-list-container" key={mal_id} >
                <h3> 1</h3>
                <figure className="image-container">
                  <img src={episodes[0].image} alt="im" className="image-episode" />
                </figure>
                <p> {episodes[0].synopsis} </p>
                </article> 
            );
          })}
        </div>

      </div>

      <div className="episodes-container">

          {infoAnime.map(({ image, synopsis, mal_id, episodes }) => {
            return (
              <article className="paquete-list-container" key={mal_id} >
                <h3> 2 </h3>
                <figure className="image-container">
                  <img src={episodes[0].image} alt="im" className="image-episode" />
                </figure>
                <p> {episodes[0].synopsis} </p>
                </article> 
            );
          })}
        
      </div>
      <div className="episodes-container">

          {infoAnime.map(({ image, synopsis, mal_id, episodes }) => {
            return (
              <article className="paquete-list-container" key={mal_id} >
                <h3> 3 </h3>
                <figure className="image-container">
                  <img src={episodes[0].image} alt="im" className="image-episode" />
                </figure>
                <p> {episodes[0].synopsis} </p>
                </article> 
            );
          })}
        
      </div>
      <div className="episodes-container">

          {infoAnime.map(({ image, synopsis, mal_id, episodes }) => {
            return (
              <article className="paquete-list-container" key={mal_id} >
                <h3> 4 </h3>
                <figure className="image-container">
                  <img src={episodes[0].image} alt="im" className="image-episode" />
                </figure>
                <p> {episodes[0].synopsis} </p>
                </article> 
            );
          })}
        
      </div>




      <Footer></Footer>
    </>
  );
};

export default Anime;
