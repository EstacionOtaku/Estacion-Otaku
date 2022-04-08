import ImagenCe from "../../assets/Nosotros/Aliados/ce.png"
import ImagenGhibli from "../../assets/Nosotros/Aliados/ghibli.png"
import ImagenHayad from "../../assets/Nosotros/Aliados/hayad.png"
import ImagenMadhouse from "../../assets/Nosotros/Aliados/madhouse.png"
import ImagenPeru from "../../assets/Nosotros/Aliados/peru.png"
import ImagenPierrot from "../../assets/Nosotros/Aliados/pierrot.png"
import ImagenSunsire from "../../assets/Nosotros/Aliados/sunrise.png"
import ImagenToei from "../../assets/Nosotros/Aliados/toei.png"
import ImagenTrigger from "../../assets/Nosotros/Aliados/trigger.png"
const CarruselAliadosNosotros = () => {
    return (
        <section className="equipo_carrusel text-white">
        <div className="container p-3">
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">           
              <div className=" col-lg-12 col-md-12 mb-4  text-center">            
                <div className="col-md-8 offset-md-2 col-sm-8 offset-sm-2">
                  <div className="carousel-item active">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-4 col-sm-4 col-sm-4 d-sm-block">                      
                            <img
                              src={ImagenCe}
                              className="card-img-top"
                              alt=""
                            />                      
                        </div>           
                        <div className="col-lg-4 d-none d-lg-block col-sm-4 d-sm-block">                       
                            <img
                              src={ImagenGhibli}
                              className="card-img-top"
                              alt=""
                            />                     
                        </div>           
                        <div className="col-lg-4 d-none d-lg-block col-sm-4 d-sm-block">                       
                            <img
                              src={ImagenHayad}
                              className="card-img-top"
                              alt=""
                            />           
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-4 col-sm-4 col-sm-4 d-sm-block">                      
                            <img
                              src={ImagenSunsire}
                              className="card-img-top"
                              alt=""
                            />                      
                        </div>           
                        <div className="col-lg-4 d-none d-lg-block col-sm-4 d-sm-block">                       
                            <img
                              src={ImagenPeru}
                              className="card-img-top"
                              alt=""
                            />                     
                        </div>           
                        <div className="col-lg-4 d-none d-lg-block col-sm-4 d-sm-block">                       
                            <img
                              src={ImagenMadhouse}
                              className="card-img-top"
                              alt=""
                            />           
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-4 col-sm-4 col-sm-4 d-sm-block">                      
                            <img
                              src={ImagenTrigger}
                              className="card-img-top"
                              alt=""
                            />                      
                        </div>           
                        <div className="col-lg-4 d-none d-lg-block col-sm-4 d-sm-block">                       
                            <img
                              src={ImagenToei}
                              className="card-img-top"
                              alt=""
                            />                     
                        </div>           
                        <div className="col-lg-4 d-none d-lg-block col-sm-4 d-sm-block">                       
                            <img
                              src={ImagenPierrot}
                              className="card-img-top"
                              alt=""
                            />           
                        </div>
                      </div>
                    </div>
                  </div> 
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
    </section>
     );
}
 
export default CarruselAliadosNosotros;