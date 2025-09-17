import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const reseñas = [
  {
    text: "Me encanta el cariño y la implicación de Mar en todo lo que hace. Su disposición para colaborar con los profesores y demás personas implicadas en el proceso de desarrollo de cualquier niño que trata de forma personal. En nuestro caso, estamos muy contentos con los resultados de su trabajo en nuestro hijo.",
    author: "I. Moncho"
  },
  {
    text: "Recomendación 10/10 El trabajo que hace con los niños es estupendo Mar se implica mucho, a nosotros nos ha ayudado un montón, hemos logrado una mejora que sin su ayuda sería imposible.",
    author: "A. Andrade"
  },
  {
    text: "Un trato genial, muy profesional y sobre todo nos ayudó mucho.",
    author: "P. Rodríguez"
  },
];

const CarruselReseñas = () => {
  return (
    <section className="bg-[#efdfc2] py-12">
        
      <div className="max-w-4xl mx-auto px-4">
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
        >
          {reseñas.map((testimonial, index) => (
            <SwiperSlide key={index}>
                
              <div className="bg-[#6e9277] text-white rounded-[40px] shadow-lg p-8 min-h-[280px] flex flex-col justify-center items-center text-center transition-all duration-300">
                <p className="text-base md:text-lg mb-4 leading-relaxed max-w-3xl">
                  {testimonial.text}
                </p>
                <p className="font-bold text-lg">– {testimonial.author}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
           {/* Botón para añadir reseña */}
        <div className="text-center mt-8">
            <a
                href="https://www.google.com/search?sca_esv=b16b84e114d62432&tbm=lcl&sxsrf=AE3TifPCX1XZXYkzOhZcovcRfaQvxzSwJg:1754563011983&q=Motivem+Rese%C3%B1as&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2NjE1NbA0MbMwMzMztDQ1MDE03cDI-IpRwDe_JLMsNVchKLU49fDGxOJFrBhCAP9MfntAAAAA&rldimm=3455094686661950415&hl=es-ES&sa=X&ved=2ahUKEwjb0MLIwPiOAxVmVqQEHaSFAhwQ9fQKegQIRRAF&biw=1536&bih=730&dpr=1.25#lkt=LocalPoiReviews"
                className="inline-block px-6 py-2 border border-[#6e9277] text-[#6e9277] border-2 hover:bg-[#6e9277] hover:text-white transition-colors duration-300 cursor-pointer rounded"
                target="_blank"
                rel="noopener noreferrer"
            >
                AÑADE UNA RESEÑA
            </a>
        </div>

    

      </div>
      a <link rel="stylesheet" href="" />
    </section>
  );
};

export default CarruselReseñas;
