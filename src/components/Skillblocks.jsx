import Skillpic from "../Subcomps/Skillpic"
import VRBlock from "../Subcomps/VRBlock"
import Data4 from "../fronttech.json"
import Data5 from "../backtech.json"

export default function Skillblocks() {
    return(
        <section className="Skilldisplay">
                <section className="Skillblock">
                {Data4.map((item, index) => (
                    <Skillpic
                        key={index}
                        display={item.display}
                        alt={item.alt}
                    />
                ))}
                </section>
            <VRBlock/>
            <section className="Skillblock">  
                {Data5.map((item, index) => (
                    <Skillpic
                        key={index}
                        display={item.display}
                        alt={item.alt}
                    />
                ))}
            </section>   
        </section>
    )
}