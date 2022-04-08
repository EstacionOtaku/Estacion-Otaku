import ReactPlayer from "react-player";
import HeaderCategory from "../components/Header/HeaderCategory";
import "../styles/css/ReproducirAnime.css"
const ReproducirAnime = () => {
  return (
    <>
    <HeaderCategory></HeaderCategory>
    <div className="page-reproductor">
        <h1 className="title-video">NOMBRE DEL ANIME</h1>
      <section className="video-container">
        <ReactPlayer
          width='100%'
          height='100%'
          url={"https://www.youtube.com/watch?v=9sHuxqW786Q"}
          controls
          playing
          onPlay={() => alert("Anime reproducido por ESTACION OTAKU")}
        />
      </section>
      </div>
    </>
  );
};

export default ReproducirAnime;
