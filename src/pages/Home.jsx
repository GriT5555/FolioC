import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import CardsContainer from "../components/CardsContainer";
import Customhr from "../components/CustomHR";
import Skillblocks from "../components/Skillblocks";
import Footer from "../components/Footer";

export default function Home(){
    return(
        <>
            <Navbar />
                <main className="guts">
                    <Intro id="Me"/>
                    <Skillblocks/>
                    <Customhr />
                    <CardsContainer id="Builds"/>
                    <Customhr />
                </main>
            <Footer />
        </>
    );
}