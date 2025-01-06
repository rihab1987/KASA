import {useState} from "react";
import PropTypes from 'prop-types';
import collapseIcon from "../../assets/collapse-arrow.svg";
import "./Collapse.css";

function Collapse ({ title, content, isList}) {
//Etat local pour gérer si le collapse est ouvert ou fermé , qui est fermé par défaut     
    const [isOpen, setIsOpen] = useState(false); 
    const [iconRotation, setIconRotation] = useState (""); // Pas de rotation au départ 
// Fonction pour ouvrir/fermer l'élément et de mettre à jour l'icone 
const toggleCollapse = () => {
    setIsOpen(!isOpen);
    setIconRotation(isOpen ? "reverse" : "rotate") ;
};
//Classe dynamique pour le contenu (ouvert/fermé et liste ou non )
const collapseContentClass = `collapse_content ${isList ? "facilities" : ""} ${isOpen ? "open" : "close"}`;


    return (
        <div className="collapse">
            {/*Titre du collapse avec le bouton pour ouvrir /fermer*/}
            <div className="collapse_title">
                <h2>{title}</h2>
                <button
                className={`collapse_icon ${iconRotation}`} //classe CSS pour styliser lee bouton 
                onClick={toggleCollapse}//Action de clic 
                >
                    <img src={collapseIcon} alt= "Icone flèche de l'accordéon" />

                </button>

            </div>
            {/*contenu du collapse*/}
            <div className={collapseContentClass}>
                {isList ? (
                    // Si c'est une liste ,afficher chaque élément dans une balise <li>
                    <ul>
                        {content.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))} 
                    </ul>
                ) : (
                    //Si non afficher le contenu sous forme de paragraphe 
                    <p>{content}</p>
                )}
                

            </div>

        </div>
    );

}
//Validation des types des props avec PropTypes 
Collapse.propTypes = {
    title: PropTypes.string.isRequired,//Le titre est obligatoire et doit être une chaîne de caractère 
    content: PropTypes.oneOfType([
        PropTypes.string,//Peut être une chaîne de caractère 
        PropTypes.arrayOf(PropTypes.string),//ou un tableau de chaîne 
    ]).isRequired,
    isList:PropTypes.bool,//Indique si le contenu est une liste 
};
export default Collapse;


