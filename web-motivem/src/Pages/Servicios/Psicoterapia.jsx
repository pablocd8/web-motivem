import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header";
const Psicoterapia = () => {
  return (
    <>
      <Header showLogo={false} />

      <div className="min-h-screen w-full" style={{ backgroundColor: "#efdfc2" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10 pt-2 pb-8">
          {/* Barra superior */}
        

          {/* Letrero */}
          <div className="flex flex-col items-center mt-2">
            <Link to="/servicios"> {/* Esto lleva a la página de servicios */}
              <img
                src="/psicoterapia-letrero.png"
                alt="Servicios"
                className="w-[450px] h-auto transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
              />
            </Link>
          </div>

          {/* Contenido */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-6 text-slate-800 leading-relaxed">
            {/* Columna izquierda */}
            <section>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#6e9277] mb-3">
                ¿Qué es la psicoterapia?
              </h2>
              <p className="mb-3 text-lg">
                La psicoterapia es un tratamiento de colaboración basado en la
                relación entre una persona y el psicólogo/a. Su base
                fundamental es el diálogo, proporcionando un ambiente de apoyo
                que permite hablar abiertamente con alguien objetivo, neutral e
                imparcial.
              </p>
              <p className="mb-6 text-lg">
                Se trabaja en la identificación y cambio de los patrones de
                pensamiento y comportamiento. El tratamiento psicológico tiene
                como objetivo que la persona aprenda las herramientas necesarias
                para recuperar el bienestar personal.
              </p>

              <h2 className="text-2xl md:text-3xl font-semibold  text-[#6e9277] 0 mb-3">
                Frecuencia de las sesiones
              </h2>
              <p className="mb-2 text-lg">
                Al comienzo del tratamiento se recomienda asistir con una
                frecuencia semanal. Posteriormente, de acuerdo con la evolución
                de la persona, las sesiones podrán espaciarse hasta el alta
                definitiva.
              </p>
              <p className="mb-6 text-lg">
                La duración del proceso depende de factores como el tiempo de
                evolución del problema, su gravedad y la implicación de la
                persona en la terapia. Este tema se aborda de forma directa y
                personalizada durante las primeras sesiones.
              </p>
            </section>

            {/* Columna derecha */}
            <section>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#6e9277] mb-3">
                Motivos para asistir a terapia
              </h2>

              <ul className="space-y-3 mb-6 text-lg">
                {[
                  "Aprenderás herramientas para la gestión emocional.",
                  "Aprenderás a controlar y gestionar tus pensamientos de manera adecuada.",
                  "Desarrollarás nuevas capacidades personales que te fortalecerán como persona.",
                  "Evolucionarás a nivel personal y/o profesional.",
                  "Desarrollarás tus habilidades personales y mejorarás tu autoestima.",
                  "Aprenderás herramientas para la resolución de problemas.",
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
                Duración de las terapias
              </h2>
              <p className="text-lg">Las sesiones tienen una duración de 60 minutos.</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Psicoterapia;
