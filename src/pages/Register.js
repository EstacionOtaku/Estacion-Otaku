const Register = () => {
  return (
    <>
      <div>
        {" "}
        <form>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="ingresa tú correo"
            name="email"
            id="email"
            // onChange={handleChange}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="******"
            name="password"
            id="password"
            // onChange={handleChange}
          />
          <button>Register</button>
        </form>
      </div>
    </>
  );
};

export default Register;
