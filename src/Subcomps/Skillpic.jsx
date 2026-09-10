export default function Skillpic({display, alt}){
    const altext = alt || title || "DevOps version control logo";
    return(
        <img loading="lazy" className="Skillpic" src={display} alt={alt || altext}/>
    )
}