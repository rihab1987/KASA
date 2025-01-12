import {useState} from "react";
import PropTypes from 'prop-types';
import "./Carousel.css";
//Importation des icones de navigation 
import leftArrow from "../../assets/left-arrow.png";
import rightArrow from "../../assets/right-arrow.png";

//Composant Carousel pour gérer le défilement des images 
const Carousel = ({images})=>{
//Etat pour suivre l'indice de l'image affichée    
    const [currentIndex, setCurrentIndex] = useState(0);
//Fonction pour passer à l'image suivante
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
//Fonction pour revenir à l'image précédente
    const prevSlide = () => {
        setCurrentIndex (
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };
//Verifivation pour afficher les flèches et le compteur uniquement si plusieurs images 
    const showArrowsAndNumber = images&& images.length >1; // Définir une condition,j'affiche les flèches et le compteur si plusieurs images  

    return(
        <div className="carrousel_container">
            {/*Affichage de l'image actuelle*/}
            {images && images.length > 0 &&(
                <img src = {images[currentIndex]} alt= {`Slide ${currentIndex + 1}`} />
            )}
            {/*Flèche de navigation et compteur*/}
            {showArrowsAndNumber && (
                <div>
                    <img
                    className = "left_arrow"
                    src= {leftArrow}
                    alt= "Flèche de gauche"
                    onClick={prevSlide}
                    />
                    {/*compteur d'images*/}
                    <div className="slide_number">
                        {currentIndex + 1}/{images.length}
                    </div>
                    <img
                    className="right_arrow"
                    src={rightArrow}
                    alt="Flèche de droite"
                    onClick={nextSlide}
                    />
                </div>  
            )}  
            
        </div>
    );
};
//Définition des propTypes pour le composant Carousel
Carousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,// Tableau de chaînes de caractères requis 
};


export default Carousel;