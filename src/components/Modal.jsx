import Modcontent from "../Subcomps/Modcontent"

export default function Modal({project, onClose}) {
    return(
        <section className="ModalBody" onClick={onClose}>
            <div className="ModCont" onClick={(e) => e.stopPropagation()}>
                <button className="CloseMod" onClick={onClose}>&times;</button>
                <Modcontent
                    title={project.title}
                    desc={project.description}
                    stack={project.stack}
                    src={project.github}
                />
            </div>
        </section>
    )
}