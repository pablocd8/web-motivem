import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header.jsx';
import Body from './Components/Body.jsx';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // solo animar una vez
    });
  }, []);

  return (
    <>
      <div>
        <Header />
        <Body />
        {/* <Routes>
          <Route path="/servicios" element={<Carta />} />
        </Routes> */}
      </div>
    </>
  );
}

export default App;
