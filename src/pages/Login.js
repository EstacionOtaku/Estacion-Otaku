import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login } = useAuth();
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
  return (
    <div>
      {error && <p>{error}</p>}
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
    </form>
    </div>
  );
};

export default Login;
