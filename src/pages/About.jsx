import Banner from "../components/Banner/Banner";
import image from "../assets/ImageBannerAPropos.png";
import Collapse from "../components/Collapse/Collapse";
import "../about.css";

const about = [
  {
    title: "Fiabilité",
    description:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
  },
  {
    title: "Respect",
    description:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    title: "Service",
    description:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraîneraune exclusion de notre plateforme.",
  },
  {
    title: "Sécurité",
    description:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];

function About() {
  return(
    <div className="about-page">
      <Banner 
      image={image}
      alt="Bannière de la page A propos"
      />
      <div className="about_div">
      {about.map((data, index) => (
          <Collapse key={index} title={data.title} content={data.description} />
        ))}

        

      </div>

    </div>

  
  );
}

export default About;

