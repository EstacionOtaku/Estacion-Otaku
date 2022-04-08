import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import Slider from "react-slick/lib/slider";
import { Sugerencia } from "../../data/PeliImageData";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "purple", fontSize: "30px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "purple", fontSize: "30px" }} />
    </div>
  );
};

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  slidesToShow: 7,
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
        slidesToScroll: 2,
      },
    },
  ],
};

const Sugerencias = () => {

  const [infoAnime, setInfoAnime] = useState([]);

  useEffect(() => {
    const apiAnimes = async () => {
      try {
        const response = await fetch(
          // "https://api.jsonbin.io/b/624b9e67fdd14a0f46801c48/1"
          "https://api.jsonbin.io/b/62504f5b7b69e806cf4ac257/3"
        );
        const data = await response.json();
        const animeSelected = data.results.filter(function (element) {
          return element.airing === false;
        });
        setInfoAnime(animeSelected);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    apiAnimes();
  }, []);
  console.log(infoAnime);

  console.log(infoAnime.mal_id)

  return (
    <div style={{ margin: "30px" }} className="carousel">
      <Slider {...carouselProperties}>
        {infoAnime.map(({image_url,mal_id}) => (
          <MovieCard image_url={image_url} mal_id={mal_id} />
        ))}
      </Slider>
    </div>
  );
};

const MovieCard = ({ image_url,mal_id }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <Link to={`/anime/${mal_id}`}>
      <img
        className="card__multi-image_url"
        src={image_url}
        alt="movie"
        style={{
          width: "100%",
          height: "170px",
          objectFit: "contain",
          marginBottom: "10px",
        }}
      />
    </Link>
    </div>
  );
};
export default Sugerencias;
