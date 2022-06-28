import React, { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./category.css";
import { NextBtn, PreviousBtn } from "./Arrows";
const data = [
  {
    id: 1,
    categoryName: "Aventura",
    image: "https://res.cloudinary.com/estacion-otaku/image/upload/v1656352998/animes/anime-categories/adventure.png",
  },
  {
    id: 2,
    categoryName: "Kids",
    image: "https://res.cloudinary.com/estacion-otaku/image/upload/v1656352998/animes/anime-categories/kids.png",
  },
  {
    id: 3,
    categoryName: "Pelea",
    image: "https://res.cloudinary.com/estacion-otaku/image/upload/v1656352998/animes/anime-categories/martial-arts.png",
  },
  {
    id: 4,
    categoryName: "Comedia",
    image: "https://res.cloudinary.com/estacion-otaku/image/upload/v1656352998/animes/anime-categories/comedy.png",
  },
  {
    id: 5,
    categoryName: "Fantasía",
    image: "https://res.cloudinary.com/estacion-otaku/image/upload/v1656352998/animes/anime-categories/fantasy.png",
  },
  {
    id: 6,
    categoryName: "Drama",
    image: "https://res.cloudinary.com/estacion-otaku/image/upload/v1656352998/animes/anime-categories/drama.png",
  },
  {
    id: 7,
    categoryName: "Ciencia Ficción",
    image: "https://res.cloudinary.com/estacion-otaku/image/upload/v1656352997/animes/anime-categories/science-fiction.png",
  },
];

const carouselProperties = {
  slidesToShow: 5,
  centerMode: true,
  centerPadding: "170px",
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

const CategoriaCards = ({ setTema }) => {
  return (
    <div style={{ zIndex: 10, position: "relative" }}>
      <div className="carousel carousel__container">
        <Slider {...carouselProperties}>
          {data.map((item, index) => {
            const { image, categoryName } = item;
            return <CategoryCard key={index} image={image} setTema={setTema} categoryName={categoryName}></CategoryCard>;
          })}
        </Slider>
      </div>
    </div>
  );
};

const CategoryCard = ({ image, categoryName, setTema }) => {
  const [isHovered, setIsHovered] = useState(false);
  const onClickImage = (e) => {
    setTema(e.target.alt);
  };
  return (
    <Link to="/categoria">
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
        <motion.h3 className="category-card__name" initial={false} animate={{ top: isHovered ? 50 : 70 }}>
          {categoryName}
        </motion.h3>
      </div>
    </Link>
  );
};

export default CategoriaCards;
