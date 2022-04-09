import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Game from "./pages/Game";
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
import ReproducirAnime from "./pages/ReproducirAnime";

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

  let LocalTema = JSON.parse(localStorage.getItem("Local-Tema"));
  if (LocalTema) {
  } else {
    LocalTema = [""];
  }
  const [tema, setTema] = useState(LocalTema);
  useEffect(() => {
    let LocalTema = JSON.parse(localStorage.getItem("Local-Tema"));
    if (LocalTema) {
      localStorage.setItem("Local-Tema", JSON.stringify(tema));
    } else {
      localStorage.setItem("Local-Tema", JSON.stringify([""]));
    }
  }, [tema]);

  return (
    <main className="main">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<StarPage imageHeader={imageHeader} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/game" element={<Game />} />

          <Route
            path="/nosotros"
            element={
              <ProtectedRoute>
                <Nosotros imageHeader={imageHeader} />
              </ProtectedRoute>
            }
          />

          <Route
            path="/categoria"
            element={
              <ProtectedRoute>
                <Categoria tema={tema} imageHeader={imageHeader} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/anime/:id"
            element={
              <ProtectedRoute>
                <Anime imageHeader={imageHeader} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/anime/:id-:n"
            element={
              <ProtectedRoute>
                <ReproducirAnime imageHeader={imageHeader} />
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
                <Inicio setTema={setTema} imageHeader={imageHeader} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Avatar"
            element={
              <Avatar
                imageHeader={imageHeader}
                setImageHeader={setImageHeader}
              ></Avatar>
            }
          />
        </Routes>
      </AuthProvider>
    </main>
  );
};

export default App;
