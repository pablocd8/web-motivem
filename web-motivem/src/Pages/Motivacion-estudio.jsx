import React from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";

const MotivacionEstudio = () => {
  return (
    <>
      <Header showLogo={false} />

      <div className="min-h-screen w-full" style={{ backgroundColor: "#efdfc2" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10 pt-2 pb-8">
          {/* Barra superior */}

          {/* Letrero */}
          <div className="flex flex-col items-center mt-2">
            <Link to="/servicios">
              <img
                src="/motivacion.png"
                alt="Motivación para el Estudio"
                className="w-[400px] h-auto transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
              />
            </Link>
          </div>

          {/* Contenido */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-6 text-slate-800 leading-relaxed">
            {/* Columna izquierda */}
            <section>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#6e9277] mb-3">
                Motivación para el estudio
              </h2>
              <p className="mb-3 text-lg">
                Estudiar no es una tarea sencilla; requiere de esfuerzo, ganas,
                perseverancia y, sobre todo, motivación para vencer cualquier
                dificultad y avanzar hacia la meta.
              </p>
              <p className="mb-6 text-lg">
                En <strong>MOTIVEM</strong> consideramos la motivación como un
                elemento indispensable para canalizar el esfuerzo, la energía y la
                conducta del estudiante hacia el logro de los objetivos de
                aprendizaje.
              </p>

              <h2 className="text-2xl md:text-3xl font-semibold text-[#6e9277] mb-3">
                ¿Qué se trabaja en estas sesiones?
              </h2>
              <ul className="space-y-3 mb-6 text-lg">
                {[
                  "Búsqueda y establecimiento de objetivos.",
                  "Estrategias para mejorar los hábitos de estudio.",
                  "Valoración de las capacidades de aprendizaje.",
                  "Estructuración de la conducta, el comportamiento y el nivel de resistencia para superar los retos.",
                  "Diseño de un plan personalizado de estudio.",
                  "Técnicas de concentración.",
                  "La influencia de las emociones en el aprendizaje.",
                  "Gestión del tiempo.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 shrink-0 rounded-full bg-amber-500/90 text-white items-center justify-center text-xs font-bold">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Columna derecha */}
            <section>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#6e9277] mb-3">
                Beneficios de trabajar la motivación
              </h2>

              <ul className="space-y-3 mb-6 text-lg">
                {[
                  "Incremento del interés y la constancia en el estudio.",
                  "Mejor manejo del estrés y la frustración.",
                  "Desarrollo de una actitud positiva hacia el aprendizaje.",
                  "Fortalecimiento de la autoestima académica.",
                  "Optimización del rendimiento y la productividad.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 shrink-0 rounded-full bg-amber-500/90 text-white items-center justify-center text-xs font-bold">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl md:text-3xl font-semibold text-[#6e9277] mb-2">
                Duración de las sesiones
              </h2>
              <p className="text-lg">
                Las sesiones tienen una duración de 60 minutos y se adaptan a las
                necesidades y ritmo del estudiante.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default MotivacionEstudio;
