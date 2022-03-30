import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
      });
    const [error, setError] = useState(); 
    const navigate = useNavigate();
    const {signup} = useAuth();

    const handleChange = e => {
        const {target: {name, value}} = e;
        setUser({...user,[name]:value});
    }
    const handleSubmit = async e => {
        e.preventDefault();
        setError('');
        // console.log(user);
        try {
          await signup(user.email, user.password);
          navigate("/login");
        } catch (error) {
          setError(error.mesagge);
          if (error.code ==="auth/internal-error"){
            setError('El correo ingresado es invalido');
          }
          else if(error.code === "auth/invalid-email"){
            setError('El correo ingresado es invalido')
          }
          else if (error.code === "auth/weak-password"){
            setError('La contraseña debe contener más de 6 caracteres');
          }
          else if (error.code === "auth/email-already-in-use"){
            setError('Este correo ya está registrado');
          }
        }
    }


  return (
    <>
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
          <button>Register</button>
        </form>
      </div>
    </>
  );
};

export default Register;
