import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from "./components/ProtectedRoute";

import StarPage from "./pages/StartPage";
// import HeaderLanding from "./components/Header/HeaderLanding";

import Avatar from "./pages/Avatar";
import { useEffect, useState } from "react";
import Categoria from "./pages/Categoria";
import Anime from "./pages/Anime";
import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";

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

  const [tema, setTema] = useState("");
  console.log(tema);

  return (
    <main className="main">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<StarPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/nosotros"
            element={
              <ProtectedRoute>
                <Nosotros />
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
            path="/anime/:id"
            element={
              <ProtectedRoute>
                <Anime />
              </ProtectedRoute>
            }
          />
          {/* <Route exact path="/anime/:id" render={(props) => (
            <ProtectedRoute>
            <Anime id={props.match.params.id} />
            </ProtectedRoute>
          )} /> */}

          <Route
            path="/inicio"
            element={
              <ProtectedRoute>
                <Inicio setTema={setTema} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Avatar"
            element={<Avatar imageHeader={imageHeader} setImageHeader={setImageHeader}></Avatar>}
          />
        </Routes>
      </AuthProvider>
    </main>
  );
};

export default App;
