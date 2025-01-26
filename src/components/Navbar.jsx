import { Link, NavLink } from "react-router-dom";
import icon from '../assets/home-icon.png'

function Navbar() {
    return(
        <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container justify-content-center " >
          <NavLink  className="navbar-brand" to="/">
            <img src={icon}  alt="icono home" />
          </NavLink>
        </div>
      </nav>
    )
}

export default Navbar;
