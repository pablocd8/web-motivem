import Header from "../Components/Header";
import Body from "../Components/Body";
import CarruselReseñas from "../Components/CarruselReseñas";
import Footer from "../Components/Footer";
import CarruselFotosMotivem from "../Components/CarruselFotoMotivem";

const Home = () => {
    return (
        <>
            <Header showLogo={true} />
            <Body />
            <CarruselFotosMotivem />
            <CarruselReseñas />
            <Footer />
        </>
    );
};

export default Home;
