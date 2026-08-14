import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Footer from "../components/Footer";
import CardsContainer from "../components/CardsContainer";
import Customhr from "../components/CustomHR";

export default function Home(){
    return(
        <>
            <Navbar />
            <main className="guts">
                <Intro />
                <Customhr />
                <CardsContainer />
                <Customhr />
                <Footer />
            </main>
        </>
    );
}