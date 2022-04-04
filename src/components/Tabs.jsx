import { useEffect, useState } from "react";
import "../styles/css/Tabs.css";

const Tabs = () => {
  const [toggle, setToggle] = useState(1);

  useEffect(() => {
    const tabHeaderItems = document.querySelectorAll(".tabs__tab-item");

    function enterTabItem() {
      const tabHeaderIcon = document.querySelector(`#icon-${this.id}`);
      tabHeaderIcon.classList.add("tab__icon--hover");
    }

    function leaveTabItem() {
      const tabHeaderIcon = document.querySelector(`#icon-${this.id}`);
      tabHeaderIcon.classList.remove("tab__icon--hover");
    }

    tabHeaderItems.forEach((item) => {
      item.addEventListener("mouseenter", enterTabItem);
      item.addEventListener("mouseleave", leaveTabItem);
    });
  }, []);

  const toggleItem = (index) => {
    setToggle(index);
  };

  return (
    <>
      <section className="tabs">
        <div className="tabs__header">
          <div className="tabs__header-container">
            <div
              id="tab-1"
              className={toggle === 1 ? "tabs__tab-item tabs__tab-item--active" : "tabs__tab-item"}
              onClick={() => toggleItem(1)}
            >
              <div
                id="icon-tab-1"
                className={toggle === 1 ? "tab__icon tab__icon--door tab__icon--active" : "tab__icon tab__icon--door "}
              ></div>
              <p className="tabs__tab-title">Cancela cuando quieras</p>
            </div>
            <div
              id="tab-2"
              className={toggle === 2 ? "tabs__tab-item tabs__tab-item--active" : "tabs__tab-item"}
              onClick={() => toggleItem(2)}
            >
              <div
                id="icon-tab-2"
                className={
                  toggle === 2 ? "tab__icon tab__icon--devices tab__icon--active" : "tab__icon tab__icon--devices"
                }
              ></div>
              <p className="tabs__tab-title">Mira donde sea</p>
            </div>
            <div
              id="tab-3"
              className={toggle === 3 ? "tabs__tab-item tabs__tab-item--active" : "tabs__tab-item"}
              onClick={() => toggleItem(3)}
            >
              <div
                id="icon-tab-3"
                className={toggle === 3 ? "tab__icon tab__icon--price tab__icon--active" : "tab__icon tab__icon--price"}
              ></div>
              <p className="tabs__tab-title">Escoge tu precio</p>
            </div>
          </div>
        </div>

        <div className="tab-content">
          <div className="tab-content__container">
            <div
              id="tab-1-content"
              className={toggle === 1 ? "tab-1-content tab-content__item show" : "tab-1-content tab-content__item"}
            >
              <div className="tab-content__inner">
                <div className="tab-content__inner-cta tab-content__inner-cta--cancel">
                  <p className="tab-content__description">
                    Si decides que Netflix no es para ti - no hay problema. Sin compromisos. Cancela en linea en
                    cualquier momento.
                  </p>
                  <a className="tab-content__button" href="">
                    Mira gratis por 30 días
                  </a>
                  <p className="tab-content__dynamic-date">
                    Gratis hasta el <span id="dynamicDateEl"></span> *
                  </p>
                </div>
                <figure className="tab-content__image-container">
                  <img className="tab-content__image" src="https://i.ibb.co/J2xDJV7/tab-content-1.png" alt="" />
                </figure>
              </div>
            </div>
            <div
              id="tab-2-content"
              className={toggle === 2 ? "tab-2-content tab-content__item show" : "tab-2-content tab-content__item"}
            >
              <div className="tab-content__inner-cta">
                <p className="tab-content__description">
                  Mira películas y series en cualquier momento, donde sea - personalizado para ti.
                </p>
                <a className="tab-content__button" href="">
                  {" "}
                  Mira gratis por 30 días{" "}
                </a>
                <p className="tab-content__dynamic-date">
                  Gratis hasta el <span id="dynamicDateEl"></span> *
                </p>
              </div>
              <div className="tab-2-content-bottom">
                <div>
                  <img className="tab-content__image" src="https://i.ibb.co/DpdN7Gn/tab-content-2-1.png" alt="" />
                  <p className="tab-content__description-subtitle">Mira en tu TV</p>
                  <p className="text-dark">
                    Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, reproductores Blu-ray y más.
                  </p>
                </div>
                <div>
                  <img className="tab-content__image" src="https://i.ibb.co/R3r1SPX/tab-content-2-2.png" alt="" />
                  <p className="tab-content__description-subtitle">Mira al instante o descarga para mirar luego</p>
                  <p className="text-dark">Disponible en teléfonos y tablets, donde sea que vayas.</p>
                </div>
                <div>
                  <img className="tab-content__image" src="https://i.ibb.co/gDhnwWn/tab-content-2-3.png" alt="" />
                  <p className="tab-content__description-subtitle">Usa cualquier computadora</p>
                  <p className="text-dark">Mira en Netflix.com</p>
                </div>
              </div>
            </div>
            <div
              id="tab-3-content"
              className={toggle === 3 ? "tab-3-content tab-content__item show" : "tab-3-content tab-content__item"}
            >
              <div className="tab-content__inner-cta">
                <p className="tab-content__description">Escoge un plan y mira todo en Netflix.</p>
                <a className="tab-content__button btn btn-lg" href="">
                  Mira gratis por 30 días
                </a>
                <p className="tab-content__dynamic-date">
                  Gratis hasta el <span id="dynamicDateEl"></span> *
                </p>
              </div>
              <table className="table">
                <thead>
                  <tr className="table__title">
                    <th></th>
                    <th>Básico</th>
                    <th>Estándar</th>
                    <th>Premium</th>
                  </tr>
                </thead>
                <tbody className="table__prices">
                  <tr>
                    <td>
                      El precio mensual después de que finalice el mes gratuito el
                      <span id="dynamicDateEl"></span>
                    </td>
                    <td>S/. 24.90</td>
                    <td>S/. 34.90</td>
                    <td>S/. 44.90</td>
                  </tr>
                  <tr>
                    <td>HD Disponible</td>
                    <td>
                      <i className="fas fa-times"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Ultra HD Disponible</td>
                    <td>
                      <i className="fas fa-times"></i>
                    </td>
                    <td>
                      <i className="fas fa-times"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Pantallas que puedes ver al mismo tiempo</td>
                    <td>1</td>
                    <td>2</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>Mira en tu laptop, TV, smartphone y tablet.</td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Películas y series ilimitadas</td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Cancela cuando quieras</td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Primer mes gratis</td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tabs;
