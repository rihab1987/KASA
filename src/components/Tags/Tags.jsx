import "./tags.css";
import PropTypes from "prop-types";

//Verification si tagData est fourni(non null ou undefined)
function Tags({tagData}){
    if (!tagData){
        return <div>Loading tags...</div>//Afficher un message de chargement si les données ne sont pas disponibles 
    }
    return(
        <div className="tags">
            {/*Boucle sur les tags pour en afficher chaque élément*/}
            {tagData.map((tag,index) =>(
                <p key={index} className="tag_item">
                    {tag}{/*contenu textuel du tag*/}
                </p>
            ))}
        </div>

    );
}
Tags.propTypes = {
    tagData: PropTypes.arrayOf(PropTypes.string).isRequired, // `tagData` doit être un tableau de chaînes de caractères obligatoires
};
export default Tags;
