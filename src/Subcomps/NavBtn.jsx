export default function NavBtn({title, id, targetId}){
    const topScroll = (e)=> {
        if(title === "" ) {
            e.preventDefault();
            window.scrollTo({top: 0, behavior: "smooth"});
        }
    };
    return(
        <a className="NavBtn" href={title === "Moi" ? "#" : `#${targetId}`} id={id} onClick={topScroll}>{title}</a>
    );
}