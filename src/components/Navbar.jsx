import NavBtn from "../Subcomps/NavBtn";

export default function Navbar() {
    return(
            <nav className="NavBar">
                <NavBtn title="Me" id="Me"/>
                <NavBtn title="Stacks" id="Stacks"/>
                <NavBtn title="Projects" id="Projects"/>
            </nav>
    );
}