export default function Cards({title, cover, stack, id, alt, onClick}){

    const coversrc = cover && cover.trim() !== "" ? cover : "";

    return(
        <article id={id} className="Cards">
            <img className="Cover" src={cover}/>
            <h2 className="PrjTitle">{title}</h2>
            <ul className="stacklist">{stack}</ul>
            <button className="CrdBtn">
                Voir les détails
            </button>
        </article>
    )
}