export default function Cards({title, cover, stack, onClick}){

    const coversrc = cover && cover.trim() !== "" ? cover : "";

    return(
        <article className="Cards">
            <img className="Cover" src={cover}/>
            <h2 className="PrjTitle">{title}</h2>
            <ul className="stacklist">{stack}</ul>
        </article>
    )
}