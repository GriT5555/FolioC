import { useState } from "react";
import Cards from "../Subcomps/Cards";
import Modal from "./Modal.jsx";
import Data from "../Projects.json"
import Data2 from "../wip.json"

export default function CardsContainer(){
    const [selectedProject, setSelectedProject] = useState(null);
    const handleOpenModal = (project) => {
        setSelectedProject(project);
    };
    const handleCloseModal = () => {
        setSelectedProject(null);
    };

const formatStack = (stackData) => {
        if (!stackData) return <li>Aucune stack utilisée</li>;
        if (Array.isArray(stackData)) {
            return stackData.map((tech, i) => <li key={i}>{tech}</li>);
        }
        return <li>{stackData}</li>;
    };

    return(
        <section className="Projects" id="Builds">
            <section className="ProjectCards">
                <h1 className="Conth2">Builds terminés et projets étudiant</h1>
                <div className="Cardbox">
                    {Data.map((project) => {
                        const stackcontent=formatStack(project.stack);
                        return(
                            <Cards key={project.id}
                                   title={project.title}
                                   cover={project.cover}
                                   stack={stackcontent}
                                   onClick={() => handleOpenModal(project)}
                            />
                        )
                    })}          

                </div>
            </section>

            <section className="ProjectCards">
                <h1 className="Conth2">WIP builds et futurs projets</h1>
                <div className="Cardbox">
                    {Data2.map((project2) => {
                        const stackcontent=formatStack(project2.stack);
                        return(
                            <Cards key={project2.id}
                                   title={project2.title}
                                   cover={project2.cover}
                                   stack={stackcontent}
                                   onClick={() => handleOpenModal(project2)}
                            />
                        )
                    })} 
                </div>
            </section>
            {selectedProject && (
                <Modal 
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    )
}