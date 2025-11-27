import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header.jsx';
import Body from './Components/Body.jsx';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Components/Footer.jsx';
import Servicios from './Pages/Servicios.jsx';
import Psicoterapia from './Pages/Psicoterapia.jsx';
import MotivacionEstudio from './Pages/motivacion-estudio.jsx';
import CrearTaller from './Pages/Crear-taller.jsx';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Routes>
        {/* Ruta de inicio con Header + Body + Footer */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Body />
              <Footer />
            </>
          }
        />

        {/* Ruta de servicios solo con Servicios */}
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/psicoterapia" element={<Psicoterapia />} />
        <Route path="/motivacion-estudio" element={<MotivacionEstudio />} />


        <Route path="/crear-taller" element={<CrearTaller/>} />
      </Routes>
    </>
  );
}

export default App;
