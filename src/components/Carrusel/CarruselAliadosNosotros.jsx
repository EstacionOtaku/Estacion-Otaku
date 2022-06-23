import React from "react";
import ImagenCe from "../../assets/Nosotros/Aliados/ce.png";
import ImagenGhibli from "../../assets/Nosotros/Aliados/ghibli.png";
import ImagenHayad from "../../assets/Nosotros/Aliados/hayad.png";
import ImagenMadhouse from "../../assets/Nosotros/Aliados/madhouse.png";
import ImagenPeru from "../../assets/Nosotros/Aliados/peru.png";
import ImagenPierrot from "../../assets/Nosotros/Aliados/pierrot.png";
import ImagenSunsire from "../../assets/Nosotros/Aliados/sunrise.png";
import ImagenToei from "../../assets/Nosotros/Aliados/toei.png";
import ImagenTrigger from "../../assets/Nosotros/Aliados/trigger.png";
const CarruselAliadosNosotros = () => {
  return (
    <div id="carouselExampleControlsNoTouching" class="carousel slide py-4" data-bs-touch="false" data-bs-interval="false">
      <div class="carousel-inner">
        <div class="carousel-item active" style={{ textAlign: "center" }}>
          <img src={ImagenPeru} className="card-img-top" style={{ width: "100px" }} alt="" />
        </div>
        <div class="carousel-item" style={{ textAlign: "center" }}>
          <img src={ImagenPierrot} className="card-img-top" style={{ width: "100px" }} alt="" />
        </div>
        <div class="carousel-item" style={{ textAlign: "center" }}>
          <img src={ImagenSunsire} className="card-img-top" style={{ width: "100px" }} alt="" />
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarruselAliadosNosotros;
