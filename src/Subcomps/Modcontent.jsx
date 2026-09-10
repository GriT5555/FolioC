export default function Modcontent({title, desc, stack, src}){
    let stackContent;
    if (!stack) {
        stackContent = <li>Aucune stack utilisé</li>;
    } else if(Array.isArray(stack)) {
        stackContent = stack.map((tech, i) => <li key={i}>{tech}</li>);
    } else {
        stackContent = <li>{stack}</li>
    }
    return(
        <section className="ModWrap"/* content wrapper */>
            <h1>{title}</h1>
            <p>{desc}</p>
            <footer /* content "footer" */>
                <ul className="stacklist">{stackContent}</ul>
                <a href={src} target="_blank" rel="noopener noreferrer">
                    <img loading="lazy" src="https://i.postimg.cc/NMCB5snm/github.webp" alt="Github - Mat" className="ModHub"/>
                </a>
            </footer>
        </section>
    )
}