import { NavLink } from "react-router-dom";
import "./error404.css";

function Error404() {
  return (
    <div className="error">
      <h1>404</h1>
      <p className="error_text">
        Oups! La page que vous demandez nexiste pas.
      </p>
      <NavLink to="/" className="error_link">
        <p>Retourner sur la page d’accueil</p>
      </NavLink>
    </div>
  );
}
export default Error404;