export default function Cards({title, cover, stack, alt, onClick}){

    const coversrc = cover && cover.trim() !== "" ? cover : "";

    return(
        <article className="Cards">
            <img className="Cover" src={cover || coversrc} alt={alt || title}/>
            <h2 className="PrjTitle">{title}</h2>
            <ul className="stacklist">{stack}</ul>
            <button className="CrdBtn" onClick={onClick}>
                Voir les détails
            </button>
        </article>
    )
}