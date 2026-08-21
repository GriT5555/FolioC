import Cards from "../Subcomps/Cards";
import Data from "../Projects.json"

export default function CardsContainer({title}){

    return(
        <section className="Projects">
            <section /*Finis*/className="ProjectCards">
                <h1 className="Conth2">{title}</h1>
                <div>
                    {Data.map((project) => {
                        let stackcontent;
                        if(Array.isArray(project.stack)) {
                            stackcontent = project.stack.map((tech, i) => <li key={i}>{tech}</li>);
                        }   else if(project.stack) {
                            stackcontent = <li>{project.stack}</li>;
                        }   else if(project.stack) {
                            stackcontent = <li>No stack listed</li>
                        }
                        
                        return(
                            <Cards key={project.id} 
                                   title={project.title}
                                   cover={project.cover}
                                   stack={project.stack}
                            />

                        )
                    })}
                </div>
            </section>
        </section>
    )
}