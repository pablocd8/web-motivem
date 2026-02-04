import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
    <>
      <h1>Hola</h1>
      {children}
    </>
  );
};

export default App;
