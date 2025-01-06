import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import "./card.css";

function Card() {
//Etat local pour stocker les données de La galerie     
    const [gallery, setGallery] = useState ([]);
//Utilisation de useEffect pour récupérer les données depuis l'API au chargement du composant 
    useEffect(() =>{
        fetch ("http://localhost:8080/api/properties")// Appel à l'API pour récupérer les logements 
        .then((response) => response.json())
        .then((data) => setGallery(data))//Mise à jour de l'état local avec les données 
        .catch((error) => console.error ("Error fetching the gallery:", error));
    },[]);//[] indique que cet effet s'éxécute uniquement au chargement du composant 

//Rendu du composant   
  return (
    <div className="gallery-container container">
        {/*Boucle sur les données de la galerie pour créer une carte pour chaque élément*/}
        {gallery.map((item) =>(//Méthode map génère un lien (Link) pour chaque logement 
            <Link
             className="gallery-item"
             key={item.id}//Chaque élement doit avoir une clé unique 
             to={`./logements/${item.id}`}//Lien vers la page du détail de logement 
            >
                <img src = {item.cover} alt = {item.title} />
                <p>{item.title}</p>
            </Link>
        ))}
      
    </div>
  );
}
export default Card;

