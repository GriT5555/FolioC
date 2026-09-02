import Vers from "./Vers";
import Datavers from "../Vers.json"

export default function Intro(){
    
    return(
            <section className="Intro">
                <h1 className="ITitle">Moi c'est Mat</h1>
                <h2>Javascript Fullstack Dev. . . et plus ? </h2>
                <p className="MeDesc">
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