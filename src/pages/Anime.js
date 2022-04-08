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
          "https://api.jsonbin.io/b/624b9e67fdd14a0f46801c48/1"
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
      

          {infoAnime.map(({ image, synopsis, mal_id, episodes }) => {
            return (
              <article className="episodes-list" key={mal_id} >
                <h3>EP 1</h3>
                <figure className="image-container">
                  <img src={episodes[0].image} alt="im" className="image-episode" />
                </figure>
                <p className="sysnopsis-text"> {episodes[0].synopsis} </p>
                </article> 
            );
          })}
        </div>

      </div>

      

          {infoAnime.map(({ image, synopsis, mal_id, episodes }) => {
            return (
              <article className="episodes-list" key={mal_id} >
                <h3>EP 2 </h3>
                <figure className="image-container">
                  <img src={episodes[1].image} alt="im" className="image-episode" />
                </figure>
                <p className="sysnopsis-text"> {episodes[1].synopsis} </p>
                </article> 
            );
          })}
        
  
          {infoAnime.map(({ image, synopsis, mal_id, episodes }) => {
            return (
              <article className="episodes-list" key={mal_id} >
                <h3>EP 3 </h3>
                <figure className="image-container">
                  <img src={episodes[2].image} alt="im" className="image-episode" />
                </figure>
                <p className="sysnopsis-text"> {episodes[2].synopsis} </p>
                </article> 
            );
          })}
        

          {infoAnime.map(({ image, synopsis, mal_id, episodes }) => {
            return (
              <article className="episodes-list" key={mal_id} >
                <h3>EP 4 </h3>
                <figure className="image-container">
                  <img src={episodes[3].image} alt="im" className="image-episode" />
                  <div>
                    <p> {episodes[3].episodio_1} </p>
                  </div>
                </figure>
                <p className="sysnopsis-text"> {episodes[3].synopsis} </p>
                </article> 
            );
          })}
        
      </div>




      <Footer></Footer>
    </>
  );
};

export default Anime;
