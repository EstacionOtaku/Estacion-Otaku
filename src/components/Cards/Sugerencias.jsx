import React from "react";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick/lib/slider";
import { Sugerencia } from "../../data/PeliImageData";
import { carouselAnimeProperties } from "../../utils/carouselSettings";
import useApiAnime from "../../hooks/useApiAnime";
import RenderUI from "../../utils/RenderUI";

const Sugerencias = () => {
  const apiAnime = useApiAnime();
  const { data } = apiAnime;
  const animeSelected = data?.results?.filter((element) => element.airing === false);
  return (
    <section className="">
      <RenderUI keyData={apiAnime}>
        <div style={{ margin: "30px" }} className="carousel">
          <Slider {...carouselAnimeProperties}>
            {animeSelected?.map(({ image_url, mal_id }, index) => (
              <MovieCard key={index} image_url={image_url} mal_id={mal_id} />
            ))}
          </Slider>
        </div>
      </RenderUI>
    </section>
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
            objectFit: "cover",
            marginBottom: "10px",
          }}
        />
      </Link>
    </div>
  );
};
export default Sugerencias;
