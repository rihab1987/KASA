import "./Rating.css";

function Rating ({ratingData}){
    const filledStars = Array.from({length: ratingData},(_, index)=>(
        <i key={index} className="fas fa-star filled-star"></i>
    ));
    const emptyStars = Array.from ({length: 5 - ratingData},(_, index) =>(
        <i key={index} className="far fa-star empty-star"></i>
    ));
    
    return(
        <div className="rating">
            {filledStars}
            {emptyStars}

        </div>
    );
}
export default Rating;