import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Formulario from "../../Components/Formulario";
const Servicios = () => {
    return (
        <>
            <Header showLogo={false} />

            {/* Contenedor principal */}
            <div className="bg-[#efdfc2] min-h-screen -mt-6">

                {/* Letrero Superior */}
                <div className="flex flex-col items-center pt-4">
                    <Link to="/">
                        <img
                            src="/servicio-letrero.png"
                            alt="Servicios"
                            className="w-[500px] h-auto transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                        />
                    </Link>
                </div>

                {/* Cuadrícula de Servicios */}
                <section className="pb-10 px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">

                        {/* Psicoterapia */}
                        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="100">
                            <img src="/psicoterapia-imagen.png" alt="Psicoterapia" className="w-full max-w-md rounded shadow-sm" />
                            <Link to="/servicios/psicoterapia" className="mt-4 px-6 py-2 border-2 border-[#bf7b56] text-[#bf7b56] font-medium hover:bg-[#bf7b56] hover:text-white transition-colors duration-300">
                                SABER MÁS
                            </Link>
                        </div>

                        {/* Dificultades */}
                        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
                            <img src="/dificultades-aprendizaje.png" alt="Dificultades de aprendizaje" className="w-full max-w-md rounded shadow-sm" />
                            <Link to="/servicios/dificultades-aprendizaje" className="mt-4 px-6 py-2 border-2 border-[#94a3b8] text-[#94a3b8] font-medium hover:bg-[#94a3b8] hover:text-white transition-colors duration-300">
                                SABER MÁS
                            </Link>
                        </div>

                        {/* Motivación */}
                        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="300">
                            <img src="/motivacion-estudio.png" alt="Motivación al estudio" className="w-full max-w-md rounded shadow-sm" />
                            <Link to="/servicios/motivacion-estudio" className="mt-4 px-6 py-2 border-2 border-[#e6ca92] text-[#8b5e3b] font-medium hover:bg-[#e7d0a3] hover:text-white transition-colors duration-300">
                                SABER MÁS
                            </Link>
                        </div>

                        {/* Acompañamiento */}
                        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="100">
                            <img src="/acompañamiento-estudio.png" alt="Acompañamiento al estudio" className="w-full max-w-md rounded shadow-sm" />
                            <Link to="/servicios/acompañamiento-estudio" className="mt-4 px-6 py-2 border-2 border-[#94a3b8] text-[#94a3b8] font-medium hover:bg-[#94a3b8] hover:text-white transition-colors duration-300">
                                SABER MÁS
                            </Link>
                        </div>

                        {/* Orientación */}
                        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
                            <img src="/orientacion-familiar.png" alt="Orientación familiar" className="w-full max-w-md rounded shadow-sm" />
                            <Link to="/servicios/orientacion-familiar" className="mt-4 px-6 py-2 border-2 border-[#bf7b56] text-[#bf7b56] font-medium hover:bg-[#bf7b56] hover:text-white transition-colors duration-300">
                                SABER MÁS
                            </Link>
                        </div>

                        {/* Talleres */}
                        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="300">
                            <img src="/talleres.png" alt="Talleres" className="w-full max-w-md rounded shadow-sm" />
                            <Link to="/servicios/talleres" className="mt-4 px-6 py-2 border-2 border-[#e6ca92] text-[#8b5e3b] font-medium hover:bg-[#e7d0a3] hover:text-white transition-colors duration-300">
                                SABER MÁS
                            </Link>
                        </div>

                    </div>
                </section>
            </div>
            <Footer />
           
        </>
    );
};

export default Servicios;
