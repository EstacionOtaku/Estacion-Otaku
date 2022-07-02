import { Link, useNavigate, useParams } from "react-router-dom";
import ScreenLoader from "../components/Loaders/ScreenLoader";
import PlayBlock from "../components/PlayBlock/PlayBlock";
import { useApiAnimeParam } from "../hooks/useApiAnime";
import RenderUI from "../utils/RenderUI";
import { motion } from "framer-motion";
import "../styles/css/Category.css";
import { useEffect, useState } from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import HeaderCategory from "../components/Header/HeaderCategory";
import Swal from "sweetalert2";
import Footer from "../components/Footer/Footer";
import { getRandomInt } from "../utils/getRandomInt";
import { IoChevronBackSharp } from "react-icons/io5";

const Category = (imageHeader) => {
  const [isHover, setIsHover] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const useApiAnime = useApiAnimeParam(id, "categories");
  const [isAnimeSelected, setIsAnimeSelected] = useState();

  const { data, loading, error } = useApiAnime;

  const urlImage = Object.values(imageHeader);
  const [movie, setMovie] = useState([]);
  const [dataFilter, setDataFilter] = useState({});

  useEffect(() => {
    filterData(movie);
  }, [movie]);

  const filterData = (movie) => {
    if (!movie) {
      setDataFilter({});
    } else {
      const filteredData = data.filter((item) => {
        return Object.keys(item).some((key) => item[key].toString().toLowerCase().includes(movie));
      });
      setDataFilter(filteredData);
    }
  };

  useEffect(() => {
    if (movie.length && dataFilter.length < 1) {
      Swal.fire({
        title: "Ups, tu pelicula no se encuentra!",
        text: "Pero tienes mas opciones",
        icon: "error",
        timer: 2000,
        confirmButtonText: "Ok",
      });
    }
  }, [dataFilter]);

  useEffect(() => {
    if (data) {
      const animesLength = data[0]?.animes?.length;
      const randomAnime = getRandomInt(animesLength);
      setIsAnimeSelected(randomAnime);
    }
  }, [data]);

  if (loading) {
    return <ScreenLoader />;
  }

  const categoryName = data[0]?.name;

  const CTAData = data[0]?.animes[isAnimeSelected];
  return (
    <RenderUI keyData={useApiAnime}>
      <HeaderCategory imageHeader={urlImage} setMovie={setMovie}></HeaderCategory>

      <div className="category-title">
        <motion.div style={{ fontSize: "1.1em", opacity: 0.8 }} onClick={() => navigate(-1)} whileHover={{ scale: 1.1, cursor: "pointer", opacity: 1 }}>
          <IoChevronBackSharp /> Atrás
        </motion.div>
        <h1 className="category-title__title">{categoryName}</h1>
      </div>
      <PlayBlock data={CTAData} showCategory={false} loading={loading} />
      <h3 style={{ zIndex: 200, position: "relative", fontSize: "2rem", width: "min(90%,1250px)", margin: "0 auto", fontWeight: 600 }}>Animes de {categoryName}</h3>
      <div className="category-gallery">
        {data[0]?.animes.map((element) => {
          console.log(element);
          return (
            <article className="category-gallery__list-container" key={element.id}>
              <Link to={`/anime/${element.id}`}>
                <motion.figure
                  onMouseEnter={() => setIsHover(element.id)}
                  onMouseLeave={() => setIsHover()}
                  animate={{ boxShadow: isHover === element.id ? "0px 0px 0px 5px rgba(255, 255, 255, 0.727), rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px" : "10px 10px 10px rgba(0, 0, 0, 0.5)", transition: { ease: "easeOut" }, scale: isHover === element.id ? 1.03 : 1 }}
                  className="category-gallery__image-container"
                >
                  <img src={element.front_image} alt={element.name} className="category-gallery__image " />

                  <motion.div className="category-card__inner" initial={{ opacity: 0 }} animate={{ opacity: isHover === element.id ? 1 : 0 }}>
                    <p className="category-card__episodes">{element.seasons[0].episodes.length} episodios</p>
                    <h6 className="category-card__title">{element.name}</h6>
                    <motion.div className="category-card__play" whileHover={{ scale: 1.2 }}>
                      <BsFillPlayCircleFill />
                    </motion.div>
                  </motion.div>
                </motion.figure>
              </Link>
            </article>
          );
        })}
      </div>
      <Footer></Footer>
    </RenderUI>
  );
};

export default Category;
