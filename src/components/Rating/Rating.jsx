import "./Rating.css";
import PropTypes from "prop-types";

function Rating ({ratingData}){
    //Création d'un tableau pour les étoiles pleines 
    const filledStars = Array.from({length: ratingData},(_, index)=>(//Methode Array.form permet de générer des tableaux dynamiques en fonctions de la longeur spécifiée
        <i key={index} className="fas fa-star filled-star"></i>
        //chaque étoile pleine a une classe 'filled-star' pour la stylisation
    ));
    //Création d'un tableau pour les étoiles vides 
    const emptyStars = Array.from ({length: 5 - ratingData},(_, index) =>(
        <i key={index} className="far fa-star empty-star"></i>
        //chaque étoile vide a une classe 'empty-star' pour la stylisation
    ));
    
    return(
        <div className="rating">
            {filledStars}
            {emptyStars}

        </div>
    );
}
Rating.propTypes = {
    ratingData: PropTypes.number.isRequired, 
    //RatingData doit être un nombre obligatoire réprésentant le nombre des étoiles pleines 
};

export default Rating;