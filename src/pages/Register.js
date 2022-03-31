import { useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { AlertError } from "../components/Alert/AlertError";
import Swal from "sweetalert2";
import "../styles/css/FormSesion.css"



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
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Success Register',
            showConfirmButton: false,
            timer: 1500
          })
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
      <div className="form-container"> 
        <div className="form-message">
          <h2 className="form-message-title">Registrate aquí</h2>
          <h3 className="form-message-subtitle">Ingresa tus datos para registrarte.</h3>
        </div>
      {error && <AlertError mesagge={error}/>}
        <form onSubmit={handleSubmit} >
        <div className="form-input-container">
          <input className="form-input"
            type="text"
            placeholder="Ingresa tu nommbre"
            name="name"
            id="name"
          />
         </div>

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
            placeholder="Contraseña"
            name="password"
            id="password"
            onChange={handleChange}
          />
          </div>

        <div className="form-input-container">
          <input className="form-input"
            type="password"
            placeholder="Confirma tu contraseña"
            name="password-confirm"
            id="password-confirm"
          />

          </div>
          <div className="form__buttons">
          <button className="button-register">Registrate ahora</button>
          <p>o</p>
          <Link to="/login"> Iniciar sesión</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
