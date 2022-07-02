import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const url = process.env.REACT_APP_BASE_API_URL;

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useState({});
  const [path, setPath] = useState();

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}
