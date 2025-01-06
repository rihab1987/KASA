import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png"
import "./Header.css"

function Header (){
    return (
        <header className="menu container">
      <NavLink className="logo" to="/">
        <img src={Logo} alt="logo kasa" />
      </NavLink>
      <nav className="nav-ul">
        <NavLink to="/">Acceuil</NavLink>
        <NavLink to="/about">A Propos</NavLink>
      </nav>
    </header>
  );
};

    

export default Header;