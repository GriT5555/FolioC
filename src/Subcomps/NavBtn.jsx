export default function NavBtn({title, id, targetId}){
    return(
        <a className="NavBtn" href={`#${targetId}`} id={id}>{title}</a>
    );
}