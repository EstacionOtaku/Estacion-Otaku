// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "../../styles/css/Faq.css";
const Faq = () => {
  return (
    <section className="faq_section" alt="seccion preguntas frecuentes">
      <div className="faq-div">
        <div className="faq-title-container">
          <h1 className="faq-title" alt="preguntas frecuentes">
            Preguntas frecuentes
          </h1>
        </div>
        <div className="accordion">
          <div className="accordion-item" id="accordionItem">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                id="button"
              >
                ¿Qué es Estación Otaku?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" id="accordion-body">
                EO es un servicio de streaming que ofrece una gran variedad de películas, series y documentales
                premiados en casi cualquier pantalla conectada a internet. Todo lo que quieras ver, sin límites ni
                comerciales, a un costo muy accesible. Siempre hay algo nuevo por descubrir, ¡y todas las semanas se
                agregan más películas y series!
              </div>
            </div>
          </div>
          <div className="accordion-item" id="accordionItem">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                id="button"
              >
                ¿Cuánto cuesta EO?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" id="accordion-body">
                Disfruta <bold className="bold">Estación Otaku</bold> en tu smartphone, tablet, smart TV, laptop o
                dispositivo de streaming, todo por una tarifa plana mensual. Planes desde S/24.90 hasta S/44.90 al mes.
                Sin costos adicionales ni contratos.
              </div>
            </div>
          </div>
          <div className="accordion-item" id="accordionItem">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                id="button"
              >
                ¿Dónde puedo ver EO?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" id="accordion-body">
                EO es un servicio de streaming que ofrece una gran variedad de películas, series y documentales
                premiados en casi cualquier pantalla conectada a internet. Todo lo que quieras ver, sin límites ni
                comerciales, a un costo muy accesible. Siempre hay algo nuevo por descubrir, ¡y todas las semanas se
                agregan más películas y series!
              </div>
            </div>
          </div>
          <div className="accordion-item" id="accordionItem">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
                id="button"
              >
                ¿Cómo cancelo?
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" id="accordion-body">
                EO es flexible. Sin contratos molestos ni compromisos. Cancela la membresía online con solo dos clics.
                No hay cargos por cancelación. Empieza y termina cuando quieras.
              </div>
            </div>
          </div>
          <div className="accordion-item" id="accordionItem">
            <h2 className="accordion-header" id="headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
                id="button"
              >
                ¿Qué puedo ver en EO?
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" id="accordion-body">
                EO tiene un amplio catálogo de películas, series, documentales, animes, originales premiados y más. Todo
                lo que quieras ver, cuando quieras.
              </div>
            </div>
          </div>
          <div className="accordion-item" id="accordionItem">
            <h2 className="accordion-header" id="headingSix">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
                id="button"
              >
                ¿Es bueno EO para los niños?
              </button>
            </h2>
            <div
              id="collapseSix"
              className="accordion-collapse collapse"
              aria-labelledby="headingSix"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" id="accordion-body">
                La experiencia de EO para niños está incluida en la membresía para que los padres tengan el control
                mientras los peques disfrutan series y películas familiares en su propio espacio. Los perfiles para
                niños incluyen controles parentales protegidos por PIN que te permiten restringir el contenido que
                pueden ver los niños en función de la clasificación por edad y bloquear determinados títulos que no
                quieras que los niños vean.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
