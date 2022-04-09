import { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import "../../styles/css/Tabs.css";
import TabContentCta from "./TabContentCta";
import { dateIn30Days } from "./dateIn30Days";
import TabHeader from "./TabHeader";

const Tabs = () => {
  const [toggle, setToggle] = useState(1);

  const toggleItem = (index) => {
    setToggle(index);
  };
  return (
    <>
      <section className="tabs">
        <TabHeader toggle={toggle} toggleItem={toggleItem} />

        <div className="tab-content">
          <div className="tab-content__container">
            <div
              id="tab-1-content"
              className={
                toggle === 1
                  ? "tab-1-content tab-content__item show"
                  : "tab-1-content tab-content__item"
              }
            >
              <div className="tab-content__inner">
                <TabContentCta CTAtext="Sin compromisos. Cancela en línea cuando quieras." />
                <figure className="tab-content__image-container">
                  <img
                    className="tab-content__image"
                    src="https://i.ibb.co/J2xDJV7/tab-content-1.png"
                    alt=""
                  />
                </figure>
              </div>
            </div>
            <div
              id="tab-2-content"
              className={
                toggle === 2
                  ? "tab-2-content tab-content__item show"
                  : "tab-2-content tab-content__item"
              }
            >
              <div className="tab-content__inner">
                <TabContentCta CTAtext="Mira  animes favoritos donde quieras." />
                <div className="tab-2-content-bottom">
                  <div>
                    <img
                      className="tab-content__image"
                      src="https://i.postimg.cc/pXBWZ6Xh/tab-content-2-1.png"
                      alt=""
                    />
                    <p className="tab-content__description-subtitle">
                      Mira en tu TV
                    </p>
                    <p className="text-dark">
                      Smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                      reproductores Blu-ray y más.
                    </p>
                  </div>
                  <div>
                    <img
                      className="tab-content__image"
                      src="https://i.postimg.cc/W16k0nxX/tab-content-2-2.png"
                      alt=""
                    />
                    <p className="tab-content__description-subtitle">
                      Mira al instante o descarga para mirar luego
                    </p>
                    <p className="text-dark">
                      Disponible en teléfonos y tablets, donde sea que vayas.
                    </p>
                  </div>
                  <div>
                    <img
                      className="tab-content__image"
                      src="https://i.postimg.cc/P5tbxJqL/tab-content-2-3.png"
                      alt=""
                    />
                    <p className="tab-content__description-subtitle">
                      Usa cualquier computadora
                    </p>
                    <p className="text-dark">Mira en Netflix.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="tab-3-content"
              className={
                toggle === 3
                  ? "tab-3-content tab-content__item show"
                  : "tab-3-content tab-content__item"
              }
            >
              <div className="tab-content__inner">
                <TabContentCta CTAtext="Escoge un plan y disfruta ahora." />
                <table className="table-tab">
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
                        El precio mensual después de que finalice el mes
                        gratuito el {dateIn30Days()}
                      </td>
                      <td>S/. 24.90</td>
                      <td>S/. 34.90</td>
                      <td>S/. 44.90</td>
                    </tr>
                    <tr>
                      <td>HD Disponible</td>
                      <td>
                        <i className="fas fa-times">
                          <FaTimes />
                        </i>
                      </td>
                      <td>
                        <i className="fas fa-check">
                          <FaCheck />
                        </i>
                      </td>
                      <td>
                        <i className="fas fa-check">
                          <FaCheck />
                        </i>
                      </td>
                    </tr>
                    <tr>
                      <td>Ultra HD Disponible</td>
                      <td>
                        <i className="fas fa-times">
                          <FaTimes />
                        </i>
                      </td>
                      <td>
                        <i className="fas fa-times">
                          <FaTimes />
                        </i>
                      </td>
                      <td>
                        <i className="fas fa-check">
                          <FaCheck />
                        </i>
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
                        <i className="fas fa-check">
                          <FaCheck />
                        </i>
                      </td>
                      <td>
                        <i className="fas fa-check">
                          <FaCheck />
                        </i>
                      </td>
                      <td>
                        <i className="fas fa-check">
                          <FaCheck />
                        </i>
                      </td>
                    </tr>
                    <tr>
                      <td>Películas y series ilimitadas</td>
                      <td>
                        <i className="fas fa-check">
                          <FaCheck />
                        </i>
                      </td>
                      <td>
                        <i className="fas fa-check">
                          <FaCheck />
                        </i>
                      </td>
                      <td>
                        <i className="fas fa-check">
                          <FaCheck />
                        </i>
                      </td>
                    </tr>
                    <tr>
                      <td>Cancela cuando quieras</td>
                      <td>
                        <i className="fas fa-check">
                          <FaCheck />
                        </i>
                      </td>
                      <td>
                        <i className="fas fa-check">
                          <FaCheck />
                        </i>
                      </td>
                      <td>
                        <i className="fas fa-check">
                          <FaCheck />
                        </i>
                      </td>
                    </tr>
                    <tr>
                      <td>Primer mes gratis</td>
                      <td>
                        <i className="fas fa-check">
                          <FaCheck />
                        </i>
                      </td>
                      <td>
                        <i className="fas fa-check">
                          <FaCheck />
                        </i>
                      </td>
                      <td>
                        <i className="fas fa-check">
                          <FaCheck />
                        </i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tabs;
