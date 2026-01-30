import { Form } from "react-router-dom";
import Formulario from "./Formulario";

const Footer = () => {
    return (
        <>

        <footer className="mt-8">
            <Formulario/>

            {/* Wave SVG - Transición del Crema al Verde */}
            <div className="bg-[#efdfc2] leading-[0]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
                    <path
                        fill="#76937c"
                        fillOpacity="1"
                        d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,218.7C960,235,1056,213,1152,186.7C1248,160,1344,128,1392,112L1440,96V320H0Z"
                    ></path>
                </svg>
            </div>

            {/* Footer final (Créditos) - Fondo Verde */}
            <div className="bg-[#76937c] text-white py-10">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-sm">&copy; 2025 Motivem. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
        </>
    );
};

export default Footer;