import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { AlertError } from "../components/Alert/AlertError";
import Swal from "sweetalert2";


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

  const handleResetPassword = async() => {
    if (!user.email) return setError("Porfavor ingrese su correo");
    try {
      await resetPassword(user.email);
      alert('Se envio un mensaje a su correo');
    } catch (error) {
      setError(error.mesagge) 
    }
  }


  return (
    <div>
      {error && <AlertError mesagge={error}/>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="ingresa tú correo"
          name="email"
          id="email"
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="******"
          name="password"
          id="password"
          onChange={handleChange}
        />
        <button>Login</button>
        <a href="#!"
          onClick={handleResetPassword}
        >Forgot Password?</a>
      </form>
      <button onClick={handleGoogleSignin}>Login with Google</button>
    </div>
  );
};

export default Login;
