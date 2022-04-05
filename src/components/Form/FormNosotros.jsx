import Email from "../../assets/Nosotros/email.png";
const FormNosotros = () => {
  return (
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
  );
};

export default FormNosotros;
