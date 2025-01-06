import "./Host.css";
import PropTypes from "prop-types";

function Host({hostData}){
    //le composant reçoit un objet hostData contenant les informations sur l'hôte 
    return (
        <div>
            <div className="host">
                {/*Affichage du nom de l'hôte*/}
                <p>{hostData.name}</p>
                {/*Affichage de la photo de l'hôte*/}
                <img src={hostData.picture} alt={hostData.name} />

            </div>
        </div>
        
    );
}
Host.propTypes = {
    hostData: PropTypes.shape({
        //hostData doit être un objet contenant:
        name: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
    }).isRequired
};
   
export default Host;