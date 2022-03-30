import { createContext, useContext } from "react";
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { auth } from "../firebase";

const authContext = createContext();

/* Hook de use Auth */
export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) throw new Error("Mi leder, no existe un proveedor de autentificación");
    return context;
  };


export function AuthProvider({ children }) {
    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
      };

  return <authContext.Provider value={{ signup }}>
            {children}
         </authContext.Provider>;
}
