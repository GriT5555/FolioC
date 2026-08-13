import NavBtn from "./NavBtn";

export default function Navbar(title, id) {
    return(
            <div>
                <NavBtn title="Me" id="Me"/>
                <NavBtn title="Stacks" id="Stacks"/>
                <NavBtn title="Projects" id="Projects"/>
            </div>
    );
}