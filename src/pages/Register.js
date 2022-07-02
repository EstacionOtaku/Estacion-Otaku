import { useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { AlertError } from "../components/Alert/AlertError";
import Swal from "sweetalert2";
import "../styles/css/FormSesion.css";
import Footer from "../components/Footer/Footer";
import BackButton from "../components/Back/Back";
import Cover from "../components/Cover/Cover";
import { motion } from "framer-motion";
import axiosInstance from "../config/axiosInstance";
import Spinner from "../components/Loaders/Spinner";
import SmallLoader from "../components/Loaders/SmallLoader";

const initialData = {
  email: "",
  password: "",
  username: "",
  first_name: "",
  last_name: "",
};

const Register = () => {
  const [user, setUser] = useState(initialData);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const {
      target: { name, value },
    } = e;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (user.password !== user.passwordConfirm) {
      setError("Las contraseñas son distintas.");
    } else {
      try {
        setLoading(true);
        delete user.passwordConfirm;
        const method = "POST";
        const resource = "/auth/signup";
        const options = {
          method,
          url: resource,
          data: user,
        };
        const { data } = await axiosInstance(options);
        setUser(initialData);
        setLoading(false);
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Gracias ${data.first_name} por unirte!`,
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
        } else if (user.password !== user.passwordConfirm) {
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

            <input className="form-input" type="text" placeholder="Nombre" name="first_name" id="first_name" onChange={handleChange} />

            <input className="form-input" type="text" placeholder="Apellido" name="last_name" id="last_name" onChange={handleChange} />

            <input className="form-input" type="text" placeholder="Nombre de usuario" name="username" id="username" onChange={handleChange} />

            <input className="form-input" type="password" placeholder="Contraseña" name="password" id="password" onChange={handleChange} />

            <input className="form-input" type="password" placeholder="Confirma tu contraseña" name="passwordConfirm" id="passwordConfirm" onChange={handleChange} />
          </div>
          <div className="form__buttons">
            <button className="button-option" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              Regístrate ahora {loading && <SmallLoader></SmallLoader>}
            </button>
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
