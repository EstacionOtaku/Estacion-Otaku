import { useAuth } from "../context/authContext";

const Contenido = () => {

  const { user, logout } = useAuth();
  const handleLogout = async() => {
    await logout()
}

  return (
    <>
      <div>Contenido</div>
      <h1> Wellcome, {user.email} </h1>
      <hr/>
      <button onClick={handleLogout}>salir</button>
    </>
  );
};

export default Contenido;
