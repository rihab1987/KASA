import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

//Importation des composants nécessaires pour afficher les détails du logement 

import Carousel from "../Carousel/Carousel";
import Tags from "../Tags/Tags";
import Host from "../Host/Host";
import Rating from "../Rating/Rating";
import Collapse from "../Collapse/Collapse";
import "./logementContent.css";

function LogementContent() {
  //Etat local pour stocker les données du logement à afficher 
  const [cardData, setCardData] = useState(null);
  //Récupération de l'ID du logement depuis les paramètres de l'URL 
  const { id } = useParams();
  //Utilisation de useNavigate pour rediriger l'utilisateur si nécessaire 
  const navigate = useNavigate();

  //Effet pour récuperer les données du logement dés que le composant est monté ou que l'ID change 
  useEffect(() => {
    const fetchData = async () => {
      try {
        //requête pour récuperer les données du logement via l'API 
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
        navigate("/404");//Redirection vers la page 404 en cas d'erreur 
      }
    };

    fetchData();// Appel de la fonction pour récuperer les données 
  }, [id, navigate]);
  //L'effet dépend de "id" et "navigate", il sera déclenché chaque fois qu'ils changent 

  if (cardData === null) {
  // Afficher un état de chargement temporaire si les données ne sont pas encore récupérées
    return <p>Loading...</p>;
  }

  return (
    <div className="content">
      {/* Affichage du Carousel uniquement si les images sont disponibles */}
      {cardData.pictures && <Carousel images={cardData.pictures} />}

      <div className="description_column">
        <div className="description_title">
          {/*Afficher le titre et la localisation du logement*/}
          <h2>{cardData.title}</h2>
          <p className="location">{cardData.location}</p>
          {/*Affichage des tags associés au logement*/}
          {cardData.tags && <Tags tagData={cardData.tags} />}
        </div>

        <div className="description_host">
          {/*Affichage des informations de l'hôte uniquement si elles sont disponibles*/}
         {cardData.host && <Host hostData={cardData.host} />}
         {/*Affichage de la note de l'hébergement uniquement si elle est disponible*/}
         {cardData.rating && <Rating ratingData={Number(cardData.rating)} />}
          
        </div>
      </div>

      <div className="collapse_column">
        {/*Section pour afficher la description du logement dans un collapse*/}
        <Collapse title="Description" content={cardData.description} />
        {/* Section pour afficher les équipements sous forme de liste */}
        <Collapse
          title="Equipements"
          content={cardData.equipments}
          isList={true}//Indique que les équipements doivent être affichés sous forme de liste 
        />
      </div>
    </div>
  );
}
export default LogementContent;
