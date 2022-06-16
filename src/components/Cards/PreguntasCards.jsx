const PreguntasCards = () => {
  return (
    <>
      <div>
        <section id="preguntas frecuentes" className="p-2 col-10 offset-1 mb-5">
          <h1 className="section__preguntas-title text-center mb-4">
            Preguntas frecuentes
          </h1>
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className=" accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  ¿Qué es Estación Otaku?
                  <span className="fa fa-chevron-down"></span>
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  EO es un servicio de streaming que ofrece una gran variedad de
                  películas, series y documentales premiados en casi cualquier
                  pantalla conectada a internet. Todo lo que quieras ver, sin
                  límites ni comerciales, a un costo muy accesible. Siempre hay
                  algo nuevo por descubrir, ¡y todas las semanas se agregan más
                  películas y series!
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  ¿Cuánto cuesta EO?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Disfruta<strong>Estación Otaku</strong> en tu smartphone,
                  tablet, smart TV, laptop o dispositivo de streaming, todo por
                  una tarifa plana mensual. Planes desde S/24.90 hasta S 44.90
                  al mes. Sin costos adicionales ni contratos.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  ¿Dónde puedo ver EO?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  EO es un servicio de streaming que ofrece una gran variedad de
                  películas, series y documentales premiados en casi cualquier
                  pantalla conectada a internet. Todo lo que quieras ver, sin
                  límites ni comerciales, a un costo muy accesible. Siempre hay
                  algo nuevo por descubrir, ¡y todas las semanas se agregan más
                  películas y series!
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  ¿Cómo cancelo?
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingFour"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  EO es flexible. Sin contratos molestos ni compromisos. Cancela
                  la membresía online con solo dos clics. No hay cargos por
                  cancelación. Empieza y termina cuando quieras.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive"
                >
                  ¿Qué puedo ver en EO?
                </button>
              </h2>
              <div
                id="flush-collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingFive"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  EO tiene un amplio catálogo de películas, series,
                  documentales, animes, originales premiados y más. Todo lo que
                  quieras ver, cuando quieras.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingSix">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseSix"
                  aria-expanded="false"
                  aria-controls="flush-collapseSix"
                >
                  ¿Es bueno EO para los niños?
                </button>
              </h2>
              <div
                id="flush-collapseSix"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingSix"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  La experiencia de EO para niños está incluida en la membresía
                  para que los padres tengan el control mientras los peques
                  disfrutan series y películas familiares en su propio espacio.
                  Los perfiles para niños incluyen controles parentales
                  protegidos por PIN que te permiten restringir el contenido que
                  pueden ver los niños en función de la clasificación por edad y
                  bloquear determinados títulos que no quieras que los niños
                  vean.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>{" "}
    </>
  );
};

export default PreguntasCards;
