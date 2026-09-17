import Skillpic from "../Subcomps/Skillpic"
import Data4 from "../fronttech.json"
import Data5 from "../backtech.json"
import Data6 from "../futuretech.json"

export default function Skillblocks() {
    return(
        <section className="Vitrine">
            <h1>Stack utilisée et maîtrisée</h1>
            <section className="Skilldisplay">
                    <section className="Skillblock">
                    {Data4.map((item, index) => (
                        <Skillpic
                            key={index}
                            display={item.display}
                            alt={item.alt}
                            title={item.title}
                        />
                    ))}
                    </section>

                <section className="Skillblock" id="InProgress">  
                    {Data5.map((item, index) => (
                        <Skillpic
                            key={index}
                            display={item.display}
                            alt={item.alt}
                            title={item.title}
                        />
                    ))}
                </section>   
            </section>
            <h1>On y travaille . . .</h1>
            <section className="Skillblock">  
                    {Data6.map((item, index) => (
                        <Skillpic
                            key={index}
                            display={item.display}
                            alt={item.alt}
                            title={item.title}
                        />
                    ))}
                </section>  
        </section>
    )
}