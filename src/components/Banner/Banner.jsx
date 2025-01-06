import "./Banner.css";
import PropTypes from "prop-types";

function Banner({ image, alt, title }) {
  return (
    <section className="banner">
        <img src={image} alt={alt}/>
        <div className="text-over">
            <h1>{title}</h1>

        </div>

    </section>
  );
}
// Validation des propTypes
Banner.propTypes = {
  image: PropTypes.string.isRequired,  
  alt: PropTypes.string,   
  title: PropTypes.string, 
};
export default Banner;
