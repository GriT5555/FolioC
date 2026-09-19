export default function Modcontent({title, desc, stack, src, goal, imp}){
    let stackContent;
    if (!stack) {
        stackContent = <li>Aucune stack utilisé</li>;
    } else if(Array.isArray(stack)) {
        stackContent = stack.map((tech, i) => <li key={i}>{tech}</li>);
    } else {
        stackContent = <li>{stack}</li>
    }
    let impContent;
    if(!imp) {
        impContent = <p>Les axes d'améliorations seront définis une fois une version finale du projet déposé.</p>
    }
    return(
        <section className="ModWrap">
            <h1>{title}</h1>
            <br></br>
            <h2 className="Pgoal">{goal}</h2>
            <br></br>
            <p>{desc}</p>
            <br></br>
            <div className="Imp">
                <img loading="lazy" src="https://iili.io/nor8Dut.png" alt="Questionmark"/>
                <p>{imp || impContent}</p>
            </div>
            <footer>
                <ul className="stacklist">{stackContent}</ul>
                <a href={src} target="_blank" rel="noopener noreferrer">
                    <img loading="lazy" src="https://iili.io/nfnnmkG.webp" alt="Github - Mat" className="ModHub"/>
                </a>
            </footer>
        </section>
    )
}