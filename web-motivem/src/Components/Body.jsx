import { Link } from "react-router-dom";
import CarruselReseñas from "./CarruselReseñas";

const Body = () => {
    return (
        <>
   
            <div className="text-center mt-40 max-w-[420px] md:max-w-[600px] mx-auto">
                <img
                    src="/imagen-motivem.png"
                    alt="Logo Motivem"
                    className="mx-auto w-full h-auto block transition-transform duration-300 ease-in-out hover:scale-105"
                />
            </div>

            {/* Espacio entre imagen y sección principal */}
            <div className="h-72"></div> 

            {/* Sección principal */}
            <section className="bg-[#efdfc2] pt-12 pb-12 px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">

                    {/* Bloque 1 */}
                    <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="100">
                        <img
                            src="/diseña-tu-taller.png"
                            alt="diseña tu taller"
                            className="w-full max-w-md rounded"
                        />
                        <Link to="/crear-taller" className="mt-4 px-6 py-2 border border-[#bf7b56] text-[#bf7b56] hover:bg-[#bf7b56] hover:text-white transition-colors duration-300 rounded">
                            SABER MÁS
                        </Link>
                    </div>

                    {/* Bloque 2 */}
                    <div className="flex flex-col items-center" data-aos="fade-up">
                        <img
                            src="/guia-para-familias.png"
                            alt="guia para familias"
                            className="w-full max-w-md rounded"
                        />
                        <Link to="/otra-pagina"
                            className="mt-4 px-6 py-2 border border-[#e6ca92] text-[#8b5e3b] hover:bg-[#e7d0a3] hover:text-white transition-colors duration-300 rounded"
                        >
                            SABER MÁS
                        </Link>
                    </div>

                    {/* Bloque 3 */}
                    <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
                        <img
                            src="/historias-que-inspiran.png"
                            alt="historias que inspiran"
                            className="w-full max-w-md rounded"
                        />
                        <Link to="/otra-pagina" className="mt-4 px-6 py-2 border border-[#94a3b8] text-[#94a3b8] hover:bg-[#94a3b8] hover:text-white transition-colors duration-300 rounded">
                            SABER MÁS
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Body;
