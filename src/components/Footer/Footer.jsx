const Footer = () => {
    return (<>    <footer class="bg-primary text-secondary">
    <div class="container p-3">
      <div class="row">
        <div class="col-lg-3 col-md-12 col-xs-12 mb-3 mb-md-3 d-flex justify-content-center align-items-center" >
            <img class="" src="./images/Estación-otaku.png" alt="logo de estación otaku" />
        </div>
        <div class="col-lg-9 col-md-12 col-xs-12 mb-3 mb-md-3 ">
          <section class="mb-2">
            <p class="mb-0">
              ¿Preguntas? Envianos un correo</p>
            <p class="font-weight-bold text-info"> información@estaciónotaku.com</p>
          </section>
          <section class="mb-2">
            <div class="row">
              <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 mb-2 mb-md-2">
                <ul class="list-unstyled mb-0 ">
                  <li class="mb-3">
                    <a href="#!" class="text-decoration-none text-secondary">Preguntas frecuentes</a>
                  </li>
                  <li class="mb-3">
                    <a href="#!" class="text-decoration-none text-secondary">Prensa</a>
                  </li>
                  <li class="mb-3">
                    <a href="#!" class="text-decoration-none text-secondary">Terminos de uso</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 mb-2 mb-md-2">
                <ul class="list-unstyled mb-0">
                  <li class="mb-3 ">
                    <a href="#!" class="text-decoration-none text-secondary">Cuenta</a>
                  </li>
                  <li class="mb-3">
                    <a href="#!" class="text-decoration-none text-secondary">Nosotros</a>
                  </li>
                  <li class="mb-3">
                    <a href="#!" class="text-decoration-none texttext-decoration-none text-secondary">Avisos legales</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 mb-2 mb-md-2">
                <ul class="list-unstyled mb-0">
                  <li class="mb-3">
                    <a href="#!" class="text-decoration-none text-secondary">Mi perfil</a>
                  </li>
                  <li class="mb-3">
                    <a href="#!" class="text-decoration-none text-secondary">Inforación corporativa</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>  
        </div>
      </div>
    </div>
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © 2022 Copyright:
      <a class="text-white text-decoration-none" href="">Estación otaku</a>
    </div>
</footer>
</>);
}
 
export default Footer;