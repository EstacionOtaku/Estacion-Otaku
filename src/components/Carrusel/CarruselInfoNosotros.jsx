const CarruselInfoNosotros = () => {
    return ( 
        <section className="equipo_carrusel bg-primary text-white">
        <div className="container p-3">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active mb-4">
                    <div className="col-lg-12 col-md-12 mb-4 text-center">       
                        <img src="./img/Equipo/Jeanfranco.jpg" alt="" className="rounded-circle" style="width: 15rem; height: 15rem;"/>
                    </div>
                    <div className="col-lg-12 col-md-12 mb-4  text-center">
                        <div className="col-md-8 offset-md-2">
                            <p>La simplicidad es la clave de la verdadera elegancia</p>
                            <h3>Jeanfranco Lazarinos</h3>
                            <h5 className="">FrontEnd Developer - Graph Design UI</h5>
                        </div>
                    </div>
                  </div>
                  <div className="carousel-item mb-4">
                    <div className="col-lg-12 col-md-12 mb-4 text-center">       
                        <img src="./img/Equipo/Clarissa.jpg" alt="" className="rounded-circle" style="width: 15rem; height: 15rem;"/>
                    </div>
                    <div className="col-lg-12 col-md-12 mb-4  text-center">
                        <div className="col-md-8 offset-md-2">
                            <p>Codifica tu camino hacia el éxito</p>
                            <h3>Clarissa Palomino</h3>
                            <h5 className="">Diseñadora UX/UI</h5>
                        </div>
                    </div>
                  </div>
                  <div className="carousel-item mb-4">
                    <div className="col-lg-12 col-md-12 mb-4 text-center">       
                        <img src="./img/Equipo/Bruno.jpg" alt="" className="rounded-circle" style="width: 15rem; height: 15rem;"/>
                    </div>
                    <div className="col-lg-12 col-md-12 mb-4  text-center">
                        <div className="col-md-8 offset-md-2">
                            <p>Si puedes imaginarlo puedes programarlo</p>
                            <h3>Bruno Chan</h3>
                            <h5 className="">Desarrollador Frontend</h5>
                        </div>
                    </div>
                  </div>
                  <div className="carousel-item mb-4">
                    <div className="col-lg-12 col-md-12 mb-4 text-center">       
                        <img src="./img/Equipo/Paula.jpg" alt="" className="rounded-circle" style="width: 15rem; height: 15rem;"/>
                    </div>
                    <div className="col-lg-12 col-md-12 mb-4  text-center">
                        <div className="col-md-8 offset-md-2">
                            <p>Un código menos hacia el exito   
                            </p>
                            <h3>Paula Yongz</h3>
                            <h5 className="">Estudiante Full Stack</h5>
                        </div>
                    </div>                  
                  </div>
                  <div className="carousel-item mb-4">
                    <div className="col-lg-12 col-md-12 mb-4 text-center">       
                        <img src="./img/Equipo/Valeria.jpg" alt="" className="rounded-circle" style="width: 15rem; height: 15rem;"/>
                    </div>
                    <div className="col-lg-12 col-md-12 mb-4  text-center">
                        <div className="col-md-8 offset-md-2">
                            <p>El arte desafía a la tecnología y la tecnología inspira al arte</p>
                            <h3>Valeria Cerpa</h3>
                            <h5 className="">Frontend Developer - Arquitecta</h5>
                        </div>
                    </div>
                  </div>
                  <div className="carousel-item mb-4">
                    <div className="col-lg-12 col-md-12 mb-4 text-center">       
                        <img src="./img/Equipo/Diego.jpg" alt="" className="rounded-circle" style="width: 15rem; height: 15rem;"/>
                    </div>
                    <div className="col-lg-12 col-md-12 mb-4  text-center">
                        <div className="col-md-8 offset-md-2">                         
                            <p>Me apasiona el potencial que tiene el Internet para cambiar y mejorar el mundo</p>
                            <h3>Diego Huamán</h3>
                            <h5 className="">Desarrollador - Diseñador</h5>
                        </div>
                    </div>
                  </div>
                  <div className="carousel-item mb-4">
                    <div className="col-lg-12 col-md-12 mb-4 text-center">       
                        <img src="./img/Equipo/melodias.jpg" alt="" className="rounded-circle" style="width: 15rem; height: 15rem;"/>
                    </div>
                    <div className="col-lg-12 col-md-12 mb-4  text-center">
                        <div className="col-md-8 offset-md-2">                          
                            <p>Lorem Ipsus Lorem Ipsus Lorem Ipsus Lorem Ipsus</p>
                            <h3>Meliodas</h3>
                            <h5 className="">Desarrollador</h5>
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
 
export default CarruselInfoNosotros;