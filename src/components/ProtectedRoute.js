import { useAuth } from "../context/authContext";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({children}) {
    const {user, loading} = useAuth();
    
    if (loading) return <h1> loading... </h1>

    if(!user) return <Navigate to="/" />

    return <>{children}</>
}