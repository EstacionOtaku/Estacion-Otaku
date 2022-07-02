import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AlertError } from "../components/Alert/AlertError";
import "../styles/css/FormSesion.css";
import Footer from "../components/Footer/Footer";
import BackButton from "../components/Back/Back";
import Cover from "../components/Cover/Cover";
import { motion } from "framer-motion";
import axiosInstance from "../config/axiosInstance";
const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const [error, setError] = useState();
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!user.password || !user.username) {
      setError("Rellene los campos");
    } else {
      try {
        const data = await fetch('https://estacion-otaku-b.herokuapp.com/auth/signin', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
      })
      const json = await data.json();
      console.log(json);
      localStorage.setItem('accessToken', json.access_token);
      navigate("/inicio");
      }catch(error){
        console.log(error);
      }
    }
  }

  // const axiosGetData = () => {
  //   return async dispatch => {
  //     try {
  //       const response = fetch("https://estacion-otaku-b.herokuapp.com");
        
  //       if (response.data) {
  //         console.log(response);

  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  // }
  // useEffect(() => {
  //   axiosGetData()
  // }, [])


  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Cover />
      <BackButton route="/" />
      <div className="form-container-all">
        <div className="form-message">
          <h2 className="form-message-title">Inicia sesión</h2>
          <h3 className="form-message-subtitle">
            Ingresa tu dirección de correo electrónico y contraseña para acceder
            a tu cuenta.
          </h3>
        </div>
        {error && <AlertError mesagge={error} />}
        <form onSubmit={handleSubmit} className="form-container">
          <div className="form-input-container">
            <input
              className="form-input"
              type="text"
              placeholder="Ingresa tu nombre de usuario"
              name="username"
              id="username"
              onChange={handleChange}
            />
            <input
              className="form-input"
              type="password"
              placeholder="Ingresa tu contraseña"
              name="password"
              id="password"
              onChange={handleChange}
            />
          </div>

          <section className="form__buttons">
            <div className="button-register-container">
              <button className="button-option">Iniciar Sesión</button>
            </div>
            <div className="other_enlaces">
              <Link to="/register" className="button-info-register">
                ¿Eres nuevo por aquí? Regístrate ahora
              </Link>
              <a
                href="#!"
                // onClick={handleResetPassword}
                className="forgot-passoword-register"
              >
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
