import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AuthProvider } from "./context/AuthContext";

const App = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Mostrar variable de entorno (solo para debug)
  console.log(import.meta.env.VITE_API_URL);

  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
};

export default App;

