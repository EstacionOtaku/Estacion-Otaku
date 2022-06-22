import { useState } from "react";
import "../../styles/css/Faq.css";
import Accordion from "./Accordion";

const accordionData = [
  {
    id: 1,
    title: "¿Qué es Estación Otaku?",
    body: "EO es un servicio de streaming que ofrece una gran variedad de películas, series y documentales premiados en casi cualquier pantalla conectada a internet. Todo lo que quieras ver, sin límites ni comerciales, a un costo muy accesible. Siempre hay algo nuevo por descubrir, ¡y todas las semanas se agregan más películas y series!",
  },
  {
    id: 2,
    title: "¿Cuánto cuesta EO?",
    body: "Disfruta <bold>Estación Otaku</bold> en tu smartphone, tablet, smart TV, laptop o dispositivo de streaming, todo por una tarifa plana mensual. Planes desde S/24.90 hasta S/44.90 al mes. Sin costos adicionales ni contratos.",
  },
  {
    id: 3,
    title: "¿Dónde puedo ver EO?",
    body: "EO es un servicio de streaming que ofrece una gran variedad de películas, series y documentales premiados en casi cualquier pantalla conectada a internet. Todo lo que quieras ver, sin límites ni comerciales, a un costo muy accesible. Siempre hay algo nuevo por descubrir, ¡y todas las semanas se agregan más películas y series!",
  },
  {
    id: 4,
    title: "¿Cómo cancelo?",
    body: " EO es flexible. Sin contratos molestos ni compromisos. Cancela la membresía online con solo dos clics. No hay cargos por cancelación. Empieza y termina cuando quieras.",
  },
  {
    id: 5,
    title: "¿Es seguro EO para los niños?",
    body: "  La experiencia de EO para niños está incluida en la membresía para que los padres tengan el control mientras los peques disfrutan series y películas familiares en su propio espacio. Los perfiles para niños incluyen controles parentales protegidos por PIN que te permiten restringir el contenido que pueden ver los niños en función de la clasificación por edad y bloquear determinados títulos que no quieras que los niños vean.",
  },
  {
    id: 6,
    title: "¿Qué puedo ver en EO?",
    body: "EO tiene un amplio catálogo de películas, series, documentales, animes, originales premiados y más. Todo lo que quieras ver, cuando quieras. ",
  },
];
const Faq = () => {
  const [expanded, setExpanded] = useState(0);
  return (
    <section className="faq_section" alt="seccion preguntas frecuentes">
      <div className="faq-title-container">
        <h1 className="faq-title" alt="preguntas frecuentes">
          Preguntas frecuentes
        </h1>

        <div className="accordion">
          {accordionData.map((data, index) => (
            <Accordion i={index} data={data} expanded={expanded} setExpanded={setExpanded} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
