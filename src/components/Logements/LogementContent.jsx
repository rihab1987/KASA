import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carousel from "../Carousel/Carousel";
import Tags from "../Tags/Tags";
import Host from "../Host/Host";
import Rating from "../Rating/Rating";
import Collapse from "../Collapse/Collapse";
import "./logementContent.css";

function LogementContent() {
  const [cardData, setCardData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/properties/${id}`
        );

        if (!response.ok) {
          // Redirection vers la page 404 si la réponse n'est pas ok
          navigate("/404");
          return;
        } 

          const data = await response.json();
          setCardData(data);
      }catch (error) {
        // Gestion des erreurs réseau
        console.error("Error fetching card data:", error);
        navigate("/404");
      }
    };

    fetchData();
  }, [id, navigate]);

  if (cardData === null) {
    // Return a loading state or placeholder while data is being fetched
    return <p>Loading...</p>;
  }

  return (
    <div className="content">
      {/* Validation des données avant de les afficher */}
      {cardData.pictures && <Carousel images={cardData.pictures} />}

      <div className="description_column">
        <div className="description_title">
          <h2>{cardData.title}</h2>
          <p className="location">{cardData.location}</p>
          {cardData.tags && <Tags tagData={cardData.tags} />}
        </div>

        <div className="description_host">
         {cardData.host && <Host hostData={cardData.host} />}
         {cardData.rating && <Rating ratingData={Number(cardData.rating)} />}
          
        </div>
      </div>

      <div className="collapse_column">
        <Collapse title="Description" content={cardData.description} />
        <Collapse
          title="Equipements"
          content={cardData.equipments}
          isList={true}
        />
      </div>
    </div>
  );
}
export default LogementContent;
