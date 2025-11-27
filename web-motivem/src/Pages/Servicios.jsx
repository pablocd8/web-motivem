import { Link } from "react-router-dom";
import Header from "../Components/Header";

const Servicios = () => {
 
  return (
    <>
        <Header showLogo={false} />
        <div className="flex flex-col items-center mt-12">
            <Link to="/"> {/* Esto lleva a la página principal */}
            <img
                src="/servicio-letrero-sin-fondo.png"
                alt="Servicios"
                className="w-[300px] h-auto transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
            />
            </Link>
        </div>
        <section className="bg-[#efdfc2] pb-12 px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">

                    {/* Bloque 1 */}
                    <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="100">
                        <img 
                            src="/psicoterapia-imagen.png" 
                            alt="diseña tu taller" 
                            className="w-full max-w-md rounded" 
                        />
                        <Link to="/psicoterapia" className="mt-4 px-6 py-2 border border-[#bf7b56] border-2 text-[#bf7b56] hover:bg-[#bf7b56] hover:text-white transition-colors duration-300">
                            SABER MÁS
                        </Link>
                    </div>

                    {/* Bloque 2 */}
                    <div className="flex flex-col items-center" data-aos="fade-up">
                        <img 
                            src="/motivacion-estudio.png" 
                            alt="guia para familias" 
                            className="w-full max-w-md rounded" 
                        />
                        <Link to="/motivacion-estudio"className="mt-4 px-6 py-2 border border-[#e6ca92] border-2 text-[#8b5e3b] hover:bg-[#e7d0a3] hover:text-white transition-colors duration-300">
                            SABER MÁS
                        </Link>
                    </div>

                    {/* Bloque 3 */}
                    <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
                        <img 
                            src="/dificultades-aprendizaje.png" 
                            alt="historias que inspiran" 
                            className="w-full max-w-md rounded" 
                        />
                        <Link to="/otra-pagina" className="mt-4 px-6 py-2 border border-[#94a3b8] border-2 text-[#94a3b8] hover:bg-[#94a3b8] hover:text-white transition-colors duration-300">
                            SABER MÁS
                        </Link>
                    </div>

                    {/*Bloque 4 */}
                    <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
                        <img 
                            src="/acompañamiento-estudio.png" 
                            alt="historias que inspiran" 
                            className="w-full max-w-md rounded" 
                        />
                        <Link to="/otra-pagina" className="mt-4 px-6 py-2 border border-[#94a3b8] border-2 text-[#94a3b8] hover:bg-[#94a3b8] hover:text-white transition-colors duration-300">
                            SABER MÁS
                        </Link>
                    </div>
                    {/*Bloque 5 */}
                    <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
                        <img 
                            src="/orientacion-familiar.png" 
                            alt="historias que inspiran" 
                            className="w-full max-w-md rounded" 
                        />
                        <Link to="/otra-pagina" className="mt-4 px-6 py-2 border border-[#bf7b56] border-2 text-[#bf7b56] hover:bg-[#bf7b56] hover:text-white transition-colors duration-300">
                            SABER MÁS
                        </Link>
                    </div>
                     {/*Bloque 6 */}
                    <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
                        <img 
                            src="/orientacion-familiar.png" 
                            alt="historias que inspiran" 
                            className="w-full max-w-md rounded" 
                        />
                        <Link to="/otra-pagina"className="mt-4 px-6 py-2 border border-[#e6ca92] border-2 text-[#8b5e3b] hover:bg-[#e7d0a3] hover:text-white transition-colors duration-300">
                            SABER MÁS
                        </Link>
                    </div>
                </div>
        
            </section>
    </>
  );
};

export default Servicios;
