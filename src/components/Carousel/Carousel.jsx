import {useState} from "react";
import "./Carousel.css";
import leftArrow from "../../assets/left-arrow.png";
import rightArrow from "../../assets/right-arrow.png";

const Carousel = ({images})=>{
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex (
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    const showArrowsAndNumber = images&& images.length >1;

    return(
        <div className="carrousel_container">
            {images && images.length > 0 &&(
                <img src = {images[currentIndex]} alt= {`Slide ${currentIndex + 1}`} />
            )}
            {showArrowsAndNumber && (
                <div>
                    <img
                    className = "left_arrow"
                    src= {leftArrow}
                    alt= "Flèche de gauche"
                    onClick={prevSlide}
                    />
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


export default Carousel;