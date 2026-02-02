import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Formulario from "../Components/Formulario";
import Mapa from "../Components/Mapa";
import { Link } from "react-router-dom";
const Contacto = () => {
    return (
        <>
            <Header showLogo={false} />

            <div className="min-h-screen w-full bg-[#efdfc2] -mt-6">
                <div className="max-w-6xl mx-auto px-6 md:px-10 pb-16">

                    {/* Letrero */}
                    <div className="flex justify-center pt-6 mb-16">
                        <Link to ="/">
                        <img
                            src="/contacto-letrero.png"
                            alt="Contacto"
                            className=" w-[500px] h-auto transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                        />
                        </Link>
                    </div>

                    {/* Formulario */}
                    <div className="flex justify-center mb-20 -mt-36">
                        <Formulario />
                    </div>

                    {/* Contenido */}
                    <div className="flex justify-center text-slate-800 leading-relaxed">
                        <section className="max-w-3xl text-center">
                            <p className="mb-3 text-lg">
                                Si deseas ponerte en contacto con nosotros, puedes hacerlo a través
                                de los siguientes medios:
                            </p>
                            <ul className="space-y-3 mb-6 text-lg">
                                <li>
                                    <strong>Teléfono:</strong> +34 644 54 27 90

                                </li>
                                <li>
                                    <strong>Email:</strong>  motivem.info@gmail.com
                                </li>
                            </ul>
                            <p className="mb-3 text-lg">
                                También puedes visitarnos en nuestra dirección física:
                            </p>
                            <p className="mb-6 text-lg">
                               Avd. Albaida, 19 (bajo) 46870, Ontinyent, España
                            </p>
                            <p className="mb-3 text-lg">
                                Estamos disponibles de lunes a viernes, de 10:00 a 20:00 horas.
                            </p>
                            {/* Mapa */}
                            <div className="flex justify-center mt-12">
                                <div className="w-full max-w-4xl">
                                    <Mapa />
                                </div>
                            </div>

                        </section>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    );
};

export default Contacto;
