const CarruselAliadosNosotros = () => {
    return (
        <section className="equipo_carrusel bg-primary text-white">
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
                              src="/img/Aliados/ce.png"
                              className="card-img-top"
                              alt=""
                            />                      
                        </div>           
                        <div className="col-lg-4 d-none d-lg-block col-sm-4 d-sm-block">                       
                            <img
                              src="img/Aliados/ghibli.png"
                              className="card-img-top"
                              alt=""
                            />                     
                        </div>           
                        <div className="col-lg-4 d-none d-lg-block col-sm-4 d-sm-block">                       
                            <img
                              src="img/Aliados/hayad.png"
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
                              src="/img/Aliados/sunrise.png"
                              className="card-img-top"
                              alt=""
                            />                      
                        </div>           
                        <div className="col-lg-4 d-none d-lg-block col-sm-4 d-sm-block">                       
                            <img
                              src="img/Aliados/peru.png"
                              className="card-img-top"
                              alt=""
                            />                     
                        </div>           
                        <div className="col-lg-4 d-none d-lg-block col-sm-4 d-sm-block">                       
                            <img
                              src="img/Aliados/madhouse.png"
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
                              src="/img/Aliados/trigger.png"
                              className="card-img-top"
                              alt=""
                            />                      
                        </div>           
                        <div className="col-lg-4 d-none d-lg-block col-sm-4 d-sm-block">                       
                            <img
                              src="img/Aliados/toei.png"
                              className="card-img-top"
                              alt=""
                            />                     
                        </div>           
                        <div className="col-lg-4 d-none d-lg-block col-sm-4 d-sm-block">                       
                            <img
                              src="img/Aliados/pierrot.png"
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