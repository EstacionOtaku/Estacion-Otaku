import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from "./components/ProtectedRoute";

import StarPage from "./pages/StartPage";
// import HeaderLanding from "./components/Header/HeaderLanding";

import Avatar from "./pages/Avatar";

import Categoria from "./pages/Categoria";
import Anime from "./pages/Anime";
import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
import ReproducirAnime from "./pages/ReproducirAnime";
import AnimatedRoutes from "./components/AnimatedRoutes";

const App = () => {
  return (
    <main className="main">
      <AuthProvider>
        <AnimatedRoutes />
      </AuthProvider>
    </main>
  );
};

export default App;
