import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Footer from "../components/Footer";
import CardsContainer from "../components/CardsContainer";
import Customhr from "../components/CustomHR";
import Techs from "../components/Stack";

export default function Home(){
    return(
        <>
            <Navbar />
                <main className="guts">
                    <Intro />
                    <Techs />
                    <Customhr />
                    <CardsContainer/>
                    <Customhr />
                </main>
            <Footer />
        </>
    );
}