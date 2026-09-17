export default function Skillpic({display, alt, title}){
    const altext = alt || title || "DevOps version control logo";
    return(
        <div className="Stacku">
            <img loading="lazy" className="Skillpic" src={display} alt={alt || altext}/>
            <h3>{title}</h3>
        </div>
    )
}