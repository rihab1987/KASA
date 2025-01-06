import Banner from "../components/Banner/Banner"
import image from "../assets/ImageBannerHome.png"
import Card from "../components/Card/Card";

function Home (){
    
    return (
        <div>
            <Banner
            image={image}
            alt="photo bord de mer rocheux"
            title="Chez vous, partout et ailleurs"
            />
            <Card/>
            
        </div>
    )
}
export default Home;