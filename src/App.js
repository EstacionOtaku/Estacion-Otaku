import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";

const App = () => {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Hero/>} />
      </Routes>
    </main>
  );
};

export default App;
