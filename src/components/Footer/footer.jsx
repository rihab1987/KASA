import "./Footer.css"
import Logo from "../../assets/kasa-footer.png"

function Footer(){
    return(
        <footer>
            <img src={Logo} alt="logo kasa footer"/>
            <p>© 2023 Kasa. All rights reserved</p>
        </footer>
    ); 
};
export default Footer;