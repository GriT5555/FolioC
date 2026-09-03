import Cards from "../Subcomps/Cards";
import Data from "../Projects.json"
import Data2 from "../wip.json"

export default function CardsContainer(){

    return(
        <section className="Projects" id="Builds">
            <section className="ProjectCards">
                <h1 className="Conth2">Builds terminés et projets étudiant</h1>
                <div className="Cardbox">
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
                                   stack={stackcontent}
                            />
                            
                        )
                    })}
                </div>
            </section>

            <section className="ProjectCards">
                <h1 className="Conth2">WIP builds et futur projets</h1>
                <div className="Cardbox">
                    {Data2.map((project2) => {
                        let stackcontent;
                        if(Array.isArray(project2.stack)) {
                            stackcontent = project2.stack.map((tech, i) => <li key={i}>{tech}</li>);
                        }   else if(project2.stack) {
                            stackcontent = <li>{project2.stack}</li>;
                        }   else if(project2.stack) {
                            stackcontent = <li>No stack listed</li>
                        }
                        
                        return(
                            <Cards key={project2.id} 
                                   title={project2.title}
                                   cover={project2.cover}
                                   stack={stackcontent}
                            />

                        )
                    })}
                </div>
            </section>
        </section>
    )
}