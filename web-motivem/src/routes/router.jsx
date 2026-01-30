// src/routes/router.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";

import Servicios from "../Pages/Servicios/Servicios";
import MotivacionEstudio from "../Pages/Servicios/MotivacionEstudio";
import DificultadesAprendizaje from "../Pages/Servicios/DificultadesAprendizaje";
import Psicoterapia from "../Pages/Servicios/Psicoterapia";
import OrientacionFamiliar from "../Pages/Servicios/OrientacionFamiliar";
import AcompañamientoEstudio from "../Pages/Servicios/AcompañamientoEstudio";
import Talleres from "../Pages/Servicios/Talleres";
import Autoestima from "../Pages/Talleres/Autoestima"; 
import Emociones from "../Pages/Talleres/Emociones";
import Miedos from "../Pages/Talleres/Miedos";
import Mindfullness from "../Pages/Talleres/Mindfullness";
import ResolucionConflictos from "../Pages/Talleres/ResolucionConflictos";
import TecnicasEstudio from "../Pages/Talleres/TecnicasEstudio";
import GuiaFamilias from "../Pages/GuiaFamilias";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/servicios/motivacion-estudio" element={<MotivacionEstudio />} />
            <Route path="/servicios/dificultades-aprendizaje" element={<DificultadesAprendizaje />} />
            <Route path="/servicios/psicoterapia" element={<Psicoterapia />} />
            <Route path="/servicios/orientacion-familiar" element={<OrientacionFamiliar />} />
            <Route path="/servicios/acompañamiento-estudio" element={<AcompañamientoEstudio />} />
            <Route path="/servicios/talleres" element={<Talleres />} />
            <Route path="/talleres/autoestima" element={<Autoestima />} />
            <Route path="/talleres/emociones" element={<Emociones />} />
            <Route path="/talleres/miedos" element={<Miedos />} />
            <Route path="/talleres/mindfullness" element={<Mindfullness />} />
            <Route path="/talleres/resolucion-conflictos" element={<ResolucionConflictos />} />
            <Route path="/servicios/tecnicas-estudio" element={<TecnicasEstudio />} />
            <Route path="/guia-familias" element={<GuiaFamilias />} />
        </Routes>
    );
};

export default Router;
