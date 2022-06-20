import "../../styles/scss/Footer.scss";
import logo from "../../assets/Footer/logo.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="text-secondary">
        <div className="container p-3">
          <div className="row">
            <div className="col-lg-3 col-md-12 col-xs-12 mb-3 mb-md-3 mb-xs-12 d-flex justify-content-center align-items-center">
              <img className="footer-logo" src={logo} alt="logo de estación otaku" />
            </div>
            <div className="col-lg-9 col-md-12 col-xs-12 mb-3 mb-md-3 mb-xs-12 ">
              <section className="mb-2">
                <p className="mb-0">¿Preguntas? Envianos un correo</p>
                <p className="font-weight-bold color-text"> información@estaciónotaku.com</p>
              </section>
              <section className="mb-2">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 mb-2 mb-md-2">
                    <ul className="list-unstyled mb-0 ">
                      <li className="mb-3">
                        <a href="#!" className="text-decoration-none text-secondary">
                          Preguntas frecuentes
                        </a>
                      </li>
                      <li className="mb-3">
                        <a href="#!" className="text-decoration-none text-secondary">
                          Prensa
                        </a>
                      </li>
                      <li className="mb-3">
                        <a href="#!" className="text-decoration-none text-secondary">
                          Terminos de uso
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 mb-2 mb-md-2">
                    <ul className="list-unstyled mb-0">
                      <li className="mb-3 ">
                        <a href="#!" className="text-decoration-none text-secondary">
                          Cuenta
                        </a>
                      </li>
                      <li className="mb-3">
                        <a href="#!" className="text-decoration-none text-secondary">
                          Nosotros
                        </a>
                      </li>
                      <li className="mb-3">
                        <a href="#!" className="text-decoration-none texttext-decoration-none text-secondary">
                          Avisos legales
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 mb-2 mb-md-2">
                    <ul className="list-unstyled mb-0">
                      <li className="mb-3">
                        <a href="#!" className="text-decoration-none text-secondary">
                          Mi perfil
                        </a>
                      </li>
                      <li className="mb-3">
                        <a href="#!" className="text-decoration-none text-secondary">
                          Información corporativa
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <p className="text-center p-3">
          © 2022 Copyright
          <Link className="mx-2 text-white text-decoration-none" to="/">
            Estación Otaku
          </Link>
        </p>
      </footer>
    </>
  );
};

export default Footer;
