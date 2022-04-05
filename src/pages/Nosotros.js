import HeaderInicio from "../components/Header/HeaderInicio";
import Logo from "../assets/Nosotros/nk.png"
import "../styles/scss/Nosotros.scss"
// import Portada from "---"

const Nosotros = () => {
  
  return ( <>
  <HeaderInicio></HeaderInicio>

     <article class="container d-flex align-items-center justify-content-center alto-50 text-white mb-5">
                
                <img src={Logo} alt="nc"/>
                <div class="ps-3 ">
       <h4  class="m-0 p-2 h2">Sobre Nosotros</h4>

       <p class="m-0 p-2 fs-5">
           Nuestro sueño es crear una plataforma de streaming peruana que sea low-cost y accesible para estudiantes amantes de la cultura japonesa donde puedan encontrar contenido relacionado a series y peliculas de Anime para que puedan disfrutar de la mejor experiencia en un solo lugar.
       </p>
  
</div>

</article>
     </>  );
}
 
export default Nosotros;