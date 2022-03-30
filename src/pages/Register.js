import { useState } from "react";
import { useAuth } from "../context/authContext";


const Register = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
      });

    const {signup} = useAuth();

    const handleChange = e => {
        const {target: {name, value}} = e;
        setUser({...user,[name]:value});
    }

    const handleSubmit = async e => {
        e.preventDefault();
        // console.log(user);
        signup(user.email, user.password);
    }


  return (
    <>
      <div>
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
