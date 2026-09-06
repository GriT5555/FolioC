import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Journey from "../components/Journey";
import CardsContainer from "../components/CardsContainer";
import Skillblocks from "../components/Skillblocks";
import Footer from "../components/Footer";

export default function Home(){
    return(
        <>
            <header id="Pas deisgner, on fait de son mieux x_x">
            <Navbar/>
            </header>
                <main className="guts">
                    <section className="Mes">
                        <section className="Prev">
                            <Intro/>
                            <Journey />
                        </section>
                        <Skillblocks/>
                    </section> 
                    <CardsContainer id="Builds"/>
                </main>
            <Footer />
        </>
    );
}