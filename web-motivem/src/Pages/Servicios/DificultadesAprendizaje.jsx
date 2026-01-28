import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header";

const DificultadesAprendizaje = () => {
    return(
        <>
        <Header showLogo={false} />
        <div className="min-h-screen w-full" style={{ backgroundColor: "#efdfc2" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10 pt-2 pb-8">
          {/* Barra superior */}    
            {/* Letrero */}
            <div className="flex flex-col items-center ">
            <Link to="/servicios">
                <img
                src="/dificultades-aprendizaje-letrero.png"
                alt="Dificultades de Aprendizaje"
                className="w-[500px] h-auto transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                />
            </Link>
            </div>
            {/* Contenido */}
            <div className="flex justify-center text-slate-800 leading-relaxed">
            {/* Columna izquierda */}
            <section className="max-w-3xl text-center">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#6e9277] mb-3">
                Dificultades de aprendizaje
                </h2>
                <p className="mb-3 text-lg">
                Las dificultades de aprendizaje son trastornos que afectan la
                capacidad de una persona para adquirir y utilizar habilidades
                académicas, como la lectura, la escritura o las matemáticas. Estas
                dificultades no están relacionadas con la inteligencia general,
                sino que se deben a diferencias en la forma en que el cerebro
                procesa la información.
                </p>
                <p className="mb-6 text-lg">
                En <strong>MOTIVEM</strong>, ofrecemos apoyo especializado para
                niños y adolescentes que enfrentan estas dificultades, ayudándoles a
                desarrollar estrategias efectivas para superar los desafíos
                académicos y alcanzar su máximo potencial.
                </p>
                <h2 className="text-2xl md:text-3xl font-semibold text-[#6e9277] mb-3">
                ¿Cómo podemos ayudar?
                </h2>
                <ul className="space-y-3 mb-6 text-lg">
                {[
                    "Evaluación individualizada para identificar las áreas de dificultad.",
                    "Diseño de planes de intervención personalizados.",
                    "Técnicas de enseñanza adaptadas a las necesidades del estudiante.",
                    "Apoyo emocional y motivacional.",
                    "Colaboración con familias y escuelas para un enfoque integral.",
                ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 shrink-0 rounded-full bg-amber-500/90 text-white items-center justify-center text-xs font-bold">
                        ✓
                    </span>
                    {item}
                    </li>
                ))}
                </ul>
            </section>
            </div>
        </div>
        </div>
        </>
    )
}
export default DificultadesAprendizaje;