import HeaderInicio from "../components/Header/HeaderInicio";
import Galeria from "../components/Cards/Galeria"
import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";

const Categoria = () => {

  const [gallery, setGallery] = useState([]);
  // const recurso = `galeria`;

  useEffect(() => {
    const apiAnimes = async () => {
      try {
        const response = await fetch(
          "https://api.jsonbin.io/b/624b9e67fdd14a0f46801c48"
        );
        const data = await response.json();
        setGallery(data.results);
        //console.log(data.galeria);
      } catch (error) {
        console.log(error);
      } finally {

      }
      
    };

    apiAnimes();
  }, []);

  return (
    <>
      <HeaderInicio></HeaderInicio>
      <img
        className="prueba_image"
        src="https://i.postimg.cc/MH2VXPvw/fondoanime.jpg"
        alt="portada"
      />

      <section>
        <Galeria data={gallery} />
      </section>
      
      <Footer></Footer>

    </>
  );
};

export default Categoria;
