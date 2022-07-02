import { useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { AlertError } from "../components/Alert/AlertError";
import Swal from "sweetalert2";
import "../styles/css/FormSesion.css";
import portadaImagen from "../assets/portada/portada-singup.png";
import Footer from "../components/Footer/Footer";
import BackButton from "../components/Back/Back";
import Cover from "../components/Cover/Cover";
import { motion } from "framer-motion";

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState();
  const navigate = useNavigate();
  const { signup } = useAuth();

  const handleChange = (e) => {
    const {
      target: { name, value },
    } = e;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (user.password !== user.passwordconfirm) {
      setError("Las contraseñas son distintas.");
    } else {
      try {
        await signup(user.email, user.password);
        localStorage.setItem("nombre", user.name);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Te has registrado con éxito",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/login");
      } catch (error) {
        setError(error.mesagge);
        if (error.code === "auth/internal-error") {
          setError("El correo ingresado no es válido");
        } else if (error.code === "auth/invalid-email") {
          setError("El correo ingresado no es válido");
        } else if (error.code === "auth/weak-password") {
          setError("La contraseña debe contener mas de 6 caracteres");
        } else if (error.code === "auth/email-already-in-use") {
          setError("Este correo ya está registrado");
        } else if (user.password !== user.passwordconfirm) {
          setError("Las contraseñas son distintas");
        }
      }
    }
  };

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Cover />
      <BackButton route={"/"} />
      <div className="form-container-all">
        <div className="form-message">
          <h2 className="form-message-title">Regístrate aquí</h2>
          <h3 className="form-message-subtitle">Ingresa tus datos para registrarte.</h3>
        </div>
        {error && <AlertError mesagge={error} />}
        <form onSubmit={handleSubmit} className="form-container">
          <div className="form-input-container">
            <input className="form-input" type="email" placeholder="Correo electrónico" name="email" id="email" onChange={handleChange} />

            <input className="form-input" type="text" placeholder="Nombre Completo" name="name" id="name" onChange={handleChange} />

            <input className="form-input" type="password" placeholder="Contraseña" name="password" id="password" onChange={handleChange} />

            <input className="form-input" type="password" placeholder="Confirma tu contraseña" name="passwordconfirm" id="passwordconfirm" onChange={handleChange} />
          </div>
          <div className="form__buttons">
            <button className="button-option">Regístrate ahora</button>
            <Link to="/login" className="other-option">
              ¿Tienes una cuenta?
            </Link>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </motion.main>
  );
};

export default Register;
