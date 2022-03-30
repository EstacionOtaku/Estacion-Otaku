import { createContext } from "react";

const context = createContext();

export function AuthProvider({ children }) {
  const user = {
    login: true,
  };

  return <context.Provider value={{ user }}>
            {children}
         </context.Provider>;
}
