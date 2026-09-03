import NavBtn from "../Subcomps/NavBtn";

export default function Navbar() {
    return(
            <nav className="NavBar" >
                <NavBtn title="Me" targetId="Me"/>
                <NavBtn title="Builds" targetId="Builds"/>
                <NavBtn title="Contact" targetId="Contact"/>
            </nav>
    );
}