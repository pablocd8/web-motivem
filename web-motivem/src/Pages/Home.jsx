import Header from "../Components/Header";
import Body from "../Components/Body";
import CarruselReseñas from "../Components/CarruselReseñas";
import Footer from "../Components/Footer";

const Home = () => {
    return (
        <>
            <Header showLogo={true} />
            <Body />
            <CarruselReseñas />
            <Footer />
        </>
    );
};

export default Home;
