import HeaderInicio from "../components/Header/HeaderInicio";
import Logo from "../assets/Nosotros/nk.png";
import "../styles/scss/Nosotros.scss";
import Portada from "../assets/Nosotros/portada.png";
import Email from "../assets/Nosotros/email.png";

const Nosotros = () => {
   
  return ( <>
  <HeaderInicio></HeaderInicio>
  <img class="portada" src={Portada} alt="p"/>
     <article class="container d-flex align-items-center justify-content-center alto-50 text-white mb-5">
                
                <img src={Logo} alt="nc"/>
                <div class="ps-3 ">
       <h4  class="m-0 p-2 h2">Sobre Nosotros</h4>

       <p class="m-0 p-2 fs-5">
           Nuestro sueño es crear una plataforma de streaming peruana que sea low-cost y accesible para estudiantes amantes de la cultura japonesa donde puedan encontrar contenido relacionado a series y peliculas de Anime para que puedan disfrutar de la mejor experiencia en un solo lugar.
       </p>
  
</div>
</article>


<form action="form-control" >
    <article class="container d-flex align-items-center  alto-50 text-white  mt-5 mb-5 ">
<img class="ms-4" src={Email} alt="mail"/>
                <div class="ps-3 me-5 ">
                <h2 class="m-0 p-0 h2 ms-4 "> Recibe nuestras novedades </h2>
               </div>

  <div class="col-auto d-flex  ms-3">
    <label for="form label" class="visually-hidden">Correo:</label>
    <input type="email" class="form-control" id="email" placeholder="Email"/>
  </div>
  <div class="col-auto d-flex  ms-5">
    <button type="submit" class="btn btn-outline-light btn-border-radius-mb">Suscribirse</button>
  </div>

</article>
</form>
 
</>  
     );
}
  
export default Nosotros;