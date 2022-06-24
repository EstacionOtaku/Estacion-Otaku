import React from "react";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick/lib/slider";
import { Top10 } from "../../data/PeliImageData";
import { carouselAnimeProperties } from "../../utils/carouselSettings";

const Top10Cards = () => {
  const [infoAnime, setInfoAnime] = useState([]);

  useEffect(() => {
    const apiAnimes = async () => {
      try {
        const response = await fetch("https://api.jsonbin.io/b/6250d0207b69e806cf4ae55d/1");
        const data = await response.json();
        const animeSelected = data.results.filter(function (element) {
          return element.airing === true;
        });
        setInfoAnime(animeSelected);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    apiAnimes();
  }, []);

  return (
    <div style={{ margin: "30px" }} className="carousel">
      <Slider {...carouselAnimeProperties}>
        {infoAnime?.map(({ image_url, mal_id }, index) => (
          <MovieCard key={index} image_url={image_url} mal_id={mal_id} />
        ))}
      </Slider>
    </div>
  );
};

const MovieCard = ({ image_url, mal_id }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <Link to={`/anime/${mal_id}`}>
        <img
          className="card__multi-image_url"
          src={image_url}
          alt="movie"
          style={{
            width: "100%",
            height: "180px",
            objectFit: "contain",
            marginBottom: "10px",
          }}
        />
      </Link>
    </div>
  );
};

export default Top10Cards;
