import Modcontent from "../Subcomps/Modcontent"

export default function Modal({project, onClose}) {
    return(
        <section className="ModalBody" onClick={onClose}>
            <div className="ModCont" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose}>&times;</button>
                <Modcontent
                    title={project.title}
                    desc={project.description}
                    stack={project.stack}
                />
            </div>
        </section>
    )
}