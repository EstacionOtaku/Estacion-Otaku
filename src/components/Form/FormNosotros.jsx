import Email from "../../assets/Nosotros/email.png";

const FormNosotros = () => {
  return (
    <form action="form-control">
      <article className="container form-control-container d-flex align-items-center  alto-50 text-white  mt-5 mb-5 ">
        <img className="ms-4" src={Email} alt="mail" />
        <div className="ps-3 me-5 ">
          <h2 className="m-0 p-0 h2 ms-4 form-control-texto">
            {" "}
            Recibe nuestras novedades{" "}
          </h2>
        </div>
        <div className="col-auto d-flex  ms-3">
          <label htmlFor="form label" className="visually-hidden">
            Correo:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email"
          />
        </div>
        <div className="col-auto d-flex  ms-5">
          <button
            type="submit"
            className="btn btn-outline-light btn-border-radius-mb"
          >
            Suscribirse
          </button>
        </div>
      </article>
    </form>
  );
};

export default FormNosotros;
