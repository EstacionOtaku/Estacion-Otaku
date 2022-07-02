import { AuthProvider } from "./context/authContext";
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
