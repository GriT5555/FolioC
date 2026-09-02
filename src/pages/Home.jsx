import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Journey from "../components/Journey";
import CardsContainer from "../components/CardsContainer";
import Customhr from "../components/CustomHR";
import Skillblocks from "../components/Skillblocks";
import Footer from "../components/Footer";

export default function Home(){
    return(
        <>
            <header>
            <Navbar />
            </header>
                <main className="guts">
                    <section className="Mes">
                        <section className="Prev">
                            <Intro id="Me"/>
                            <Journey />
                        </section>
                        <Skillblocks/>
                    </section>
                    <Customhr />
                    <CardsContainer id="Builds"/>
                    <Customhr />
                </main>
            <Footer />
        </>
    );
}