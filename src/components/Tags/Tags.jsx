import "./tags.css";
import PropTypes from "prop-types";

function Tags({tagData}){
    if (!tagData){
        return <div>Loading tags...</div>
    }
    return(
        <div className="tags">
            {tagData.map((tag,index) =>(
                <p key={index} className="tag_item">
                    {tag}
                </p>
            ))}
        </div>

    );
}
Tags.propTypes = {
    tagData: PropTypes.arrayOf(PropTypes.string).isRequired, // `tagData` doit être un tableau de chaînes de caractères obligatoires
};
export default Tags;
