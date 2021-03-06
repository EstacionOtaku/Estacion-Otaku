import React, { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./category.css";
import { NextBtn, PreviousBtn } from "./Arrows";

const carouselProperties = {
  slidesToShow: 5,
  centerMode: true,
  centerPadding: "170px",
  adaptiveHeight: true,

  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
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

const CategoriaCards = ({ setTema, data }) => {
  return (
    <div style={{ zIndex: 10, position: "relative" }}>
      <div className="carousel carousel__container">
        <Slider {...carouselProperties}>
          {data?.map((item, index) => {
            return <CategoryCard key={index} data={item} setTema={setTema}></CategoryCard>;
          })}
        </Slider>
      </div>
    </div>
  );
};

const CategoryCard = ({ data, setTema }) => {
  const { image, name, animes, id } = data;
  const [isHovered, setIsHovered] = useState(false);
  const onClickImage = (e) => {
    setTema(e.target.alt);
  };

  return (
    <Link to={`/categories/${id}`}>
      <div className="category-card__container" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <figure style={{ height: "150px", width: "150px" }} onClick={onClickImage} className="category-card__image-container">
          <img className="category-card__image" src={image} alt={""} />
        </figure>
        <motion.div
          className="card-background"
          initial={false}
          animate={{
            background: isHovered ? "linear-gradient(180deg, rgba(6, 10, 25, 0.248) 0%, rgba(6, 10, 25, 0.6) 30%, rgba(0, 0, 0, 0.2) 100%, rgba(6, 10, 25, 0) 100%)" : "linear-gradient(180deg, rgba(54, 65, 105, 0) 0%, rgba(6, 10, 25, 0.6) 48.96%, rgba(0, 0, 0, 0) 100%, rgba(6, 10, 25, 0) 100%),",
          }}
          style={{ borderRadius: "20px" }}
        ></motion.div>
        <motion.h3 className="category-card__name" initial={false} animate={{ top: isHovered ? 60 : 80 }}>
          {name}
          <motion.span initial={false} animate={{ opacity: isHovered ? 1 : 0 }} className="category-card__name-animes">
            {animes.length}
            <span>Animes</span>
          </motion.span>
        </motion.h3>
      </div>
    </Link>
  );
};

export default CategoriaCards;
