import Vers from "./Vers";
import Datavers from "../Vers.json"

export default function Intro(){
    
    return(
            <section className="Intro" id="Moi">
                <h1 className="ITitle">Moi c'est Mat</h1>
                <p className="MeDesc">Quand on voit le jour dans l'effervescence du numérique, on en vient mécaniquement à se demander comment les choses fonctionnent.<br/> Alors on commence à éditer ses propres documents .txt , .level ou .w3x sur la machine familiale, puis vient le Graal, votre propre fenêtre sur le web et le digital, nous adoubant du pouvoir de développer tout ce qui nous passe par la tête. . .</p>
                <h2>Dev Javascript Fullstack. . . et pourquoi ? </h2>
                <p className="MeDesc">
                    Concilier grâce à de pertinents projets, création, passion et utilitarisme en pensant en permanence à l'humain qui maniera les instruments et interfaces développés.
                </p>
                <section className="VersCont">  
                    {Datavers.map((item, index) => (
                        <Vers 
                            key={index}
                            display={item.display}
                            alt={item.alt} 
                        />
                        
                    ))}
                <a target="_blank" rel="noopener noreferrer"href="https://github.com/GriT5555"><img loading="lazy" src="https://iili.io/nfnnmkG.webp" alt="Github - Mat" className="ghub"/></a>
                </section>
            </section>
    );
}