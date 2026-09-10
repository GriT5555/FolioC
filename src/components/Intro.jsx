import Vers from "./Vers";
import Datavers from "../Vers.json"

export default function Intro(){
    
    return(
            <section className="Intro" id="Moi">
                <h1 className="ITitle">Moi c'est Mat</h1>
                <h2>Dev Javascript Fullstack. . . et pourquoi ? </h2>
                <p className="MeDesc">
                    Concilier grâce à de fins projets, création, passion et utilitarisme en pensant en permanence à l'humain qui maniera les instruments et interfaces développés.
                </p>
                <section className="VersCont">  
                    {Datavers.map((item, index) => (
                        <Vers 
                            key={index}
                            display={item.display}
                            alt={item.alt} 
                        />
                        
                    ))}
                <a target="_blank" rel="noopener noreferrer"href="https://github.com/GriT5555"><img loading="lazy" src="https://i.postimg.cc/NMCB5snm/github.webp" alt="Github - Mat" className="ghub"/></a>
                </section>
            </section>
    );
}