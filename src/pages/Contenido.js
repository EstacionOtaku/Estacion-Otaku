import { useAuth } from "../context/authContext";


const Contenido = () => {
    const {user} = useAuth()
    console.log(user);

    return (
        <>
            <div>Contenido</div>
        </>
      );
}
 
export default Contenido;