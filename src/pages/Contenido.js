import { useAuth } from "../context/authContext";

const Contenido = () => {

  const { user } = useAuth();


  return (
    <>
      <div>Contenido</div>
      <h1> Wellcome, {user.email} </h1>

    </>
  );
};

export default Contenido;
