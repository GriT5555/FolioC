import NavBtn from "../Subcomps/NavBtn";

export default function Navbar() {
    return(
            <nav className="NavBar">
                <NavBtn title="Me" targetId="Me"/>
                <NavBtn title="Stacks" targetId="Stacks"/>
                <NavBtn title="Projects" targetId="Builds"/>
            </nav>
    );
}