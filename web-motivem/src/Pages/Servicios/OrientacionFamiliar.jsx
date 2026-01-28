import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header";

const OrientacionFamiliar = () => {
    return (
        <>
        <Header showLogo={false} />
        <div className="min-h-screen w-full" style={{ backgroundColor: "#efdfc2" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10 pt-2 pb-8">
            {/* Barra superior */}
            {/* Letrero */}
            <div className="flex flex-col items-center ">
            <Link to="/servicios">
                <img
                src="/orientacion-familiar-letrero.png"
                alt="Orientación Familiar"
                className="w-[500px] h-auto transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                />
            </Link>
            </div>
            {/* Contenido */}
            <div className="flex justify-center text-slate-800 leading-relaxed">
            {/* Columna izquierda */}
            <section className="max-w-3xl text-center">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#6e9277] mb-3">
                Orientación familiar
                </h2>
                <p className="mb-3 text-lg">
                La orientación familiar es un servicio diseñado para apoyar a las
                familias en la resolución de conflictos, mejora de la comunicación y
                fortalecimiento de los lazos familiares. A través de sesiones
                personalizadas, se abordan diversas problemáticas que pueden afectar
                la dinámica familiar.
                </p>
                <p className="mb-6 text-lg">
                En <strong>MOTIVEM</strong>, ofrecemos un espacio seguro y
                confidencial donde las familias pueden expresar sus inquietudes y
                recibir orientación profesional para mejorar su convivencia y
                bienestar emocional.
                </p>
                <h2 className="text-2xl md:text-3xl font-semibold text-[#6e9277] mb-3">
                ¿Cómo funciona la orientación familiar?
                </h2>
                <ul className="space-y-3 mb-6 text-lg">
                {[
                    "Evaluación de la dinámica familiar y las áreas de conflicto.",
                    "Sesiones de orientación individualizadas para cada familia.",
                    "Estrategias para mejorar la comunicación y resolución de conflictos.",
                    "Apoyo emocional para todos los miembros de la familia.",
                    "Fomento de un ambiente familiar saludable y armonioso.",
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
export default OrientacionFamiliar;