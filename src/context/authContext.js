import { createContext, useContext } from "react";

const authContext = createContext();

/* Hook de use Auth */
export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) throw new Error("Mi leder, no existe un proveedor de autentificación");
    return context;
  };


export function AuthProvider({ children }) {
  const user = {
    login: true,
  };

  return <authContext.Provider value={{ user }}>
            {children}
         </authContext.Provider>;
}
