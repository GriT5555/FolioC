export default function Modcontent({title, desc, stack}){
    let stackContent;
    if (!stack) {
        stackContent = <li>Aucune stack utilisé</li>;
    } else if(Array.isArray(stack)) {
        stackContent = stack.map((tech, i) => <li key={i}>{tech}</li>);
    } else {
        stackContent = <li>{stack}</li>
    }
    return(
        <section /* content wrapper */>
            <h1>{title}</h1>
            <p>{desc}</p>
            <div /* content "footer" */>
                <ul className="stacklist">{stackContent}</ul>
                <a href="https://github.com/GriT5555">
                    <img src="https://i.postimg.cc/NMCB5snm/github.webp" alt="Github - Mat" className="ghub"/>
                </a>
            </div>
        </section>
    )
}