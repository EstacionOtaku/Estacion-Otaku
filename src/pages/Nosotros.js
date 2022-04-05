import "../styles/scss/Nosotros.scss";
import HeaderInicio from "../components/Header/HeaderInicio";
import Portada from "../assets/Nosotros/portada.png";
import Logo from "../assets/Nosotros/nk.png";
import Home from "../assets/Nosotros/home.png";
import Love from "../assets/Nosotros/love.png";
import Play from "../assets/Nosotros/play.png";
import Movie from "../assets/Nosotros/movie.png";
import Footer from "../components/Footer/Footer";
import Email from "../assets/Nosotros/email.png";

const Nosotros = () => {
  return (
    <>
      <HeaderInicio></HeaderInicio>
      <img class="portada" src={Portada} alt="portada" />
      <article class="container d-flex align-items-center justify-content-center alto-50 text-white mb-5">
        <img src={Logo} alt="nekocoders" />
        <div class="ps-3 ">
          <h4 class="m-0 p-2 h2">Sobre Nosotros</h4>
          <p class="m-0 p-2 fs-5">
            Nuestro sueño es crear una plataforma de streaming peruana que sea
            low-cost y accesible para estudiantes amantes de la cultura japonesa
            donde puedan encontrar contenido relacionado a series y peliculas de
            Anime para que puedan disfrutar de la mejor experiencia en un solo
            lugar.
          </p>
        </div>
      </article>
      <section class="container d-flex align-items-center justify-content-center alto-50 mt-5 ">
        <div class="row">
          <div class="col-12 col-lg-9 ">
            <div class="row ">
              <div class="col-12 col-lg-8 p-2">
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
              <div class="col-12 col-lg-4 p-2">
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
              <div class="col-12 col-lg-4 p-2">
                <article class="card h-100 bg-dark text-white border border-white  border border-3">
                  <div class="card-body ">
                    <div class="d-flex mb-3  ">
                      <div class="ps-3">
                        <h4 class="m-0 p-2 h4">Suscriptores</h4>
                        <p class="m-0 p-2 fs-5">
                          Somos más de 2000 personas dentro de nuestra
                          plataforma
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div class="col-12 col-lg-4 p-2">
                <article class="card h-100 bg-dark text-white border border-white  border border-3 ">
                  <div class="d-flex mb-3  ">
                    <img src={Love} alt="love" />
                    <div class="ps-3 ">
                      <h4 class="m-0 p-2 h4 ">Todo en un solo lugar</h4>
                      <p class="m-0 p-2 fs-5">
                        Encuentra una variedad de series y películas de todo
                        tipo con una experiencia diseñada especialmente para ti
                      </p>
                    </div>
                  </div>
                </article>
              </div>

              <div class="col-12 col-lg-8 p-2">
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
      <form action="form-control">
        <article class="container d-flex align-items-center  alto-50 text-white  mt-5 mb-5 ">
          <img class="ms-4" src={Email} alt="mail" />
          <div class="ps-3 me-5 ">
            <h2 class="m-0 p-0 h2 ms-4 "> Recibe nuestras novedades </h2>
          </div>

          <div class="col-auto d-flex  ms-3">
            <label for="form label" class="visually-hidden">
              Correo:
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Email"
            />
          </div>
          <div class="col-auto d-flex  ms-5">
            <button
              type="submit"
              class="btn btn-outline-light btn-border-radius-mb"
            >
              Suscribirse
            </button>
          </div>
        </article>
      </form>
    </>
  );
};

export default Nosotros;
