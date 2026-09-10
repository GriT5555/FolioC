export default function Vers({display, alt}){
    const altext = alt || title || "DevOps version control logo";
    return(
        <img loading="lazy" className="Verspic" src={display} alt={alt || altext}/>
    )
}