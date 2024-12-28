import {useState} from "react";
import collapseIcon from "../../assets/collapse-arrow.svg";
import "./Collapse.css";

function Collapse ({ title, content, isList}) {
    const [isOpen, setIsOpen] = useState(false); // L'élément est fermé par défaut 
    const [iconRotation, setIconRotation] = useState (""); // Pas de rotation au départ 

    // Fonction pour ouvrir/fermer l'élément et mettre à jour l'icone 
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
        setIconRotation(isOpen ? "reverse" :"rotate" );
    };

    const collapseContentClass = `collapse_content ${
        isList ? "facilities" : ""
    } ${isOpen ? "open" : "close"}`;

    return(
        <div className="collapse">
            <div className="collapse_title">
                <h2>{title}</h2>
                <button
                   className={`collapse_icon ${iconRotation}`}
                   onClick={toggleCollapse}
                >  
                <img src={collapseIcon} alt= "Icone flèche de l'accordéon" />
                </button>
            </div>
            <div className={collapseContentClass}>
                {/* condition to display the list if necessary*/}
                {isList ? (
                    <ul>
                     {/* display the list elements fetched from the API properties */} 
                     {content.map((item, index) => (
                        <li key={index}>{item}</li>
    

                     ))}  
                    </ul>
                ) : (
                    <p>{content}</p>
                )}{" "}
                {/* If content is not a list, display changes accordingly */}
                
            </div>

        </div>

    );
}
export default Collapse;