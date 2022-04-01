import { useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { AlertError } from "../components/Alert/AlertError";
import Swal from "sweetalert2";
import "../styles/css/FormSesion.css"

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
    try {
      await login(user.email, user.password);
      Swal.fire({
        position: 'center',
        imageUrl: 'https://i.postimg.cc/63m6pLNt/logo-estacion-otaku.jpg',
        imageHeight: 300,
        imageAlt: 'A tall image',
        title: 'Wellcome to Estacion Otaku',
        showConfirmButton: false,
        timer: 1500
      })
      navigate("/contenido");
    } catch (error) {
      setError(error.mesagge);
      if (error.code === "auth/user-not-found") {
        setError("El usuario no existe");
      } else if (error.code === "auth/weak-password") {
        setError("La contraseña debe contener más de 6 caracteres");
      } else if (error.code === "auth/wrong-password") {
        setError("La contraseña ingresa es incorrecta");
      }
    }
  };
  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      Swal.fire({
        position: 'center',
        imageUrl: 'https://i.postimg.cc/63m6pLNt/logo-estacion-otaku.jpg',
        imageHeight: 300,
        imageAlt: 'A tall image',
        title: 'Wellcome to Estacion Otaku',
        showConfirmButton: false,
        timer: 1500
      })
      navigate("/contenido");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async () => {
    if (!user.email) return setError("Porfavor ingrese su correo");
    try {
      await resetPassword(user.email);
      alert('Se envio un mensaje a su correo');
    } catch (error) {
      setError(error.mesagge)
    }
  }


  return (
    <div className="form-container">
      <div className="form-message">
        <h2 className="form-message-title">Inicia sesión </h2>
        <h3 className="form-message-subtitle">Ingresa tu dirección de correo eléctronico y contraseña para acceder a tu cuenta</h3>
      </div>
      {error && <AlertError mesagge={error} />}
      <form onSubmit={handleSubmit}>
        <div className="form-input-container">
          <input className="form-input"
            type="email"
            placeholder="ingresa tú correo"
            name="email"
            id="email"
            onChange={handleChange}
          />
        </div>

        <div className="form-input-container">
          <input className="form-input"
            type="password"
            placeholder="******"
            name="password"
            id="password"
            onChange={handleChange}
          />
        </div>

        <section className="form__buttons">
          <div className="button-register-container">
          <button className="button-register">Login</button>
          <button className="button-register" onClick={handleGoogleSignin}>Login with Google</button>
          </div>
          <Link to="/register" className="button-info-register">¿Eres nuevo por aquí? Registrate ahora</Link>
          <a href="#!"
            onClick={handleResetPassword} className="forgot-passoword-register"
          >¿Olvidaste tu contraseña?</a>
        </section>
      </form>
    </div>
  ); 
};

export default Login;
