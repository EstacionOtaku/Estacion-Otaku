import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from "./components/ProtectedRoute";

import StarPage from "./pages/StartPage";
// import HeaderLanding from "./components/Header/HeaderLanding";

import { useEffect, useState } from "react";
import Categoria from "./pages/Categoria";
import Inicio from "./pages/Inicio";
import AjustesCuenta from "./pages/AjustesCuenta";


const App = () => {

  let LocalHeaderImage = JSON.parse(localStorage.getItem("image-url-header"));
  if (LocalHeaderImage) {
  } else {
    LocalHeaderImage = ["https://i.postimg.cc/9MLNHPBX/Mask-group-4.png"];
  }
  const [imageHeader, setImageHeader] = useState(LocalHeaderImage);
  useEffect(() => {
    let LocalHeaderImage = JSON.parse(localStorage.getItem("image-url-header"));
    if (LocalHeaderImage) {
      localStorage.setItem("image-url-header", JSON.stringify(imageHeader));
    } else {
      localStorage.setItem(
        "image-url-header",
        JSON.stringify(["https://i.postimg.cc/9MLNHPBX/Mask-group-4.png"])
        );
      }
    }, [imageHeader]);
    // window.confirm("Seguro de cambiar su Avatar?")

 


  return (
    <main className="main">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<StarPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        
          <Route
            path="/ajustes-usuario"
            element={
              <ProtectedRoute>
                <AjustesCuenta imageHeader={imageHeader} setImageHeader={setImageHeader} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/categoria"
            element={
              <ProtectedRoute>
                <Categoria />
              </ProtectedRoute>
            }
          />
          <Route
            path="/inicio"
            element={
              <ProtectedRoute>
                <Inicio />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </main>
  );
};

export default App;
