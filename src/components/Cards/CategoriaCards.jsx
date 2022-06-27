import React from "react";
import Slider from "react-slick";

import { CategoriaImageData } from "../../data/PeliImageData";
import { Link } from "react-router-dom";

const carouselProperties = {
  slidesToShow: 5,
  centerMode: true,
  centerPadding: "170px",

  responsive: [
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        centerMode: false,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
        centerMode: false,
        slidesToScroll: 1,
      },
    },
  ],
};

const CategoriaCards = ({ setTema }) => {
  return (
    <div className="carousel">
      <Slider {...carouselProperties}>
        {CategoriaImageData.map((item, index) => {
          const { img, categoria } = item;
          return <CategoryCard key={index} img={img} categoria={categoria} setTema={setTema}></CategoryCard>;
        })}
      </Slider>
    </div>
  );
};

const CategoryCard = ({ img, categoria, setTema }) => {
  const onClickImage = (e) => {
    setTema(e.target.alt);
  };
  return (
    <Link to="/categoria">
      <figure style={{ textAlign: "center" }} onClick={onClickImage} className="category-card__container">
        <img
          className="category-card__image"
          src={img}
          alt={categoria}
          style={{
            width: "100%",
            height: "170px",
            objectFit: "contain",
            marginBottom: "10px",
          }}
        />
      </figure>
    </Link>
  );
};

export default CategoriaCards;
