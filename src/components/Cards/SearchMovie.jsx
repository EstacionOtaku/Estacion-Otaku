import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

import { Link } from "react-router-dom";

const PreviousBtn = (props) => {
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

const SearchMovie = (dataFilter) => {
  const movieFilter = dataFilter.dataFilter;

  return (
    <div
      style={{
        margin: "30px",
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        justifyContent: "center",
      }}
    >
      {movieFilter.length ? movieFilter.map(({ image_url, mal_id }, index) => <MovieCard key={index} image_url={image_url} mal_id={mal_id} />) : console.log("")}
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
            width: "125px",
            height: "180px",
            objectFit: "cover",
            borderRadius: "20px",
            marginBottom: "10px",
          }}
        />
      </Link>
    </div>
  );
};

export default SearchMovie;
