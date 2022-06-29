import React from "react";

import Slider from "react-slick";
import { NextBtn, PreviousBtn } from "../Cards/Arrows";
import EpisodeCard from "../Cards/Episode/EpisodeCard";
import "./EpisodeCarousel.css";

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  slidesToShow: 4,
  infinite: false,
  centerMode: false,
  adaptiveHeight: true,
  // centerPadding: "700px",
  responsive: [
    {
      breakpoint: 350,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        initial: 1,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,

        slidesToScroll: 2,
      },
    },
  ],
};

const EpisodeCarousel = ({ data, route }) => {
  console.log(data);
  return (
    <section
      className="episode-carousel__section
    "
    >
      <h2 className="episode-carousel__title">Episodios</h2>

      <div style={{ position: "relative" }} className="">
        <Slider {...carouselProperties}>
          {data?.map((single, index) => {
            // console.log(index);
            return <EpisodeCard data={single} key={index} index={index} route={route} />;
          })}
        </Slider>
      </div>
    </section>
  );
};

export default EpisodeCarousel;
