import { useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { AlertError } from "../components/Alert/AlertError";
import Swal from "sweetalert2";
import portadaImagen from "../assets/background-anime.jpg";
import "../styles/css/FormSesion.css";
import Footer from "../components/Footer/Footer";
import { IoMdArrowBack } from "react-icons/io";
import BackButton from "../components/Back/Back";
import Cover from "../components/Cover/Cover";
import { motion } from "framer-motion";
const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, loginWithGoogle, resetPassword } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!user.password || !user.email) {
      setError("Rellene los campos");
    } else {
      try {
        await login(user.email, user.password);
        navigate("/inicio");
      } catch (error) {
        setError(error.mesagge);
        if (error.code === "auth/user-not-found") {
          setError("El usuario no existe");
        } else if (error.code === "auth/weak-password") {
          setError("La contraseña debe contener más de 6 caracteres");
        } else if (error.code === "auth/wrong-password") {
          setError("La contraseña ingresada no es correcta");
        }
      }
    }
  };

  const handleResetPassword = async () => {
    if (!user.email) return setError("Porfavor ingrese su correo");
    try {
      await resetPassword(user.email);
      alert("Se envió un mensaje a su correo.");
    } catch (error) {
      setError(error.mesagge);
    }
  };

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Cover />
      <BackButton route="/" />
      <div className="form-container-all">
        <div className="form-message">
          <h2 className="form-message-title">Inicia sesión</h2>
          <h3 className="form-message-subtitle">Ingresa tu dirección de correo electrónico y contraseña para acceder a tu cuenta.</h3>
        </div>
        {error && <AlertError mesagge={error} />}
        <form onSubmit={handleSubmit} className="form-container">
          <div className="form-input-container">
            <input className="form-input" type="email" placeholder="Ingresa tu nombre de usuario" name="email" id="email" onChange={handleChange} />
            <input className="form-input" type="password" placeholder="Ingresa tu contraseña" name="password" id="password" onChange={handleChange} />
          </div>

          <section className="form__buttons">
            <div className="button-register-container">
              <button className="button-option">Iniciar Sesión</button>
            </div>
            <div className="other_enlaces">
              <Link to="/register" className="button-info-register">
                ¿Eres nuevo por aquí? Regístrate ahora
              </Link>
              <a href="#!" onClick={handleResetPassword} className="forgot-passoword-register">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </section>
        </form>
      </div>

      <Footer></Footer>
    </motion.main>
  );
};

export default Login;
