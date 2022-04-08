import Home from "../../assets/Nosotros/home.png";
import Love from "../../assets/Nosotros/love.png";
import Play from "../../assets/Nosotros/play.png";

const NosotrosCards = () => {
  return (
    <section class="container d-flex align-items-center justify-content-center alto-50 mt-5 ">
      <div class="row d-flex ">
        <div class="col-12  ">
          <div class="row ">
            <div class="col-12 col-lg-12 p-2">
              <article class="card h-100 bg-light text-white border border-white  border border-3 ">
                <div class="card-body">
                  <div class="d-flex mb-3  ">
                    <img src={Play} alt="play" />
                    <div class="ps-3">
                      <h4 class="m-0 p-2 h4  text-secondary">
                        Plataforma peruana
                      </h4>
                      <p class="m-0 p-2 fs-5 text-secondary">
                        Somos la primera plataforma low-cost de streaming
                        enfocado en series y peliculas anime creada en el Perú
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div class="col-12 col-lg-6 p-2">
              <article class="card h-100 bg-dark text-white border border-white  border border-3">
                <div class="card-body ">
                  <div class="d-flex mb-3  ">
                    <div class="ps-3">
                      <h4 class="m-0 p-2 h4">Variedad</h4>
                      <p class="m-0 p-2 fs-5">
                        Ponemos a tu disposición más de 200 series y peliculas
                        de anime
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div class="col-12 col-lg-6 p-2">
              <article class="card h-100 bg-dark text-white border border-white  border border-3">
                <div class="card-body ">
                  <div class="d-flex mb-3  ">
                    <div class="ps-3">
                      <h4 class="m-0 p-2 h4">Suscriptores</h4>
                      <p class="m-0 p-2 fs-5">
                        Somos más de 2000 personas dentro de nuestra plataforma
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div class="col-12 col-lg-12 p-2">
              <article class="card h-100 bg-dark text-white border border-white  border border-3 ">
                <div class="d-flex mb-3  ">
                  <img src={Love} alt="love" />
                  <div class="ps-3 ">
                    <h4 class="m-0 p-2 h4 ">Todo en un solo lugar</h4>
                    <p class="m-0 p-2 fs-5">
                      Encuentra una variedad de series y películas de todo tipo
                      con una experiencia diseñada especialmente para ti
                    </p>
                  </div>
                </div>
              </article>
            </div>

            <div class="col-12 col-lg-12 p-2">
              <article class="card h-100 bg-light text-white border border-white  border border-3">
                <div class="card-body ">
                  <div class="d-flex mb-3 ">
                    <img src={Home} alt="home" />
                    <div class="ps-3">
                      <h4 class="m-0 p-2 h4 text-secondary ">
                        Siempre contigo
                      </h4>
                      <p class="m-0 p-2 fs-5 text-secondary ">
                        Te acompañamos donde quiera que vayas para que no te
                        pierdas ninguna de nuestras novedades
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NosotrosCards;
