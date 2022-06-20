import { AiOutlineMail } from "react-icons/ai";
const Newsletter = () => {
  return (
    <section className="container">
      <h2 className="title">Recibe nuestras ultimas novedades</h2>
      <p className="body">puedes cancelar tu suscripción en cualquier momento</p>
      <form className="form">
        <AiOutlineMail />
        <input type="email" name="" id="" placeholder="Email" />
        <button>Suscribirse</button>
      </form>
    </section>
  );
};

export default Newsletter;
