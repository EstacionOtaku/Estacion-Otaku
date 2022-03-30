import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        
      </Routes>
    </main>
  );
};

export default App;
