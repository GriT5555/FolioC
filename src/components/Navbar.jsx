import NavBtn from "../Subcomps/NavBtn";
import Logoc from "../Subcomps/logo";

export default function Navbar() {
    return(
            <nav className="NavBar" >
                <Logoc />
                <div className="btnrow">
                    <NavBtn title="Moi" targetId="Moi"/>
                    <NavBtn title="Builds" targetId="Builds"/>
                    <NavBtn title="Contact" targetId="Contact"/>
                </div>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/GriT5555">
                    <img src="https://i.postimg.cc/NMCB5snm/github.webp" alt="Github - Mat" className="ModHub"/>
                </a>
            </nav>
    );
}