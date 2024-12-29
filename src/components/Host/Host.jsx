import "./Host.css";
import PropTypes from "prop-types";

function Host({hostData}){
    return (
        <div>
            <div className="host">
                <p>{hostData.name}</p>
                <img src={hostData.picture} alt={hostData.name} />

            </div>
        </div>
        
    );
}
Host.propTypes = {
    hostData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
    }).isRequired
};
   
export default Host;