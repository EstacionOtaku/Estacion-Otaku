import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import { auth } from "../firebase";

const authContext = createContext();

/* Hook de use Auth */
export const useAuth = () => {
  const context = useContext(authContext);
  if (!context)
    throw new Error("Mi leder, no existe un proveedor de autentificación");
  return context;
};

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);


  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      //   console.log(currentUser);
      setUser(currentUser);
    });
  }, []);

  return (
    <authContext.Provider value={{ signup, login, user }}>{children}</authContext.Provider>
  );
}
