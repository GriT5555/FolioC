import Vers from "./Vers";
import Datavers from "../Vers.json"

export default function Intro(){
    
    return(
            <section className="Intro">
                <h1 className="ITitle">Me</h1>
                <h2>JS Fullstack</h2>
                <p className="Iptag">
                    desc
                </p>
                <section className="VersCont">  
                    {Datavers.map((item, index) => (
                        <Vers 
                            key={index}
                            display={item.display}
                            alt={item.alt} 
                        />
                    ))}
                </section>
            </section>
    );
}