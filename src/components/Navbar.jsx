import { NavLink } from "react-router-dom";
import navImage from "../assets/home-icon.png"

function Navbar() {
    return (
<nav>
    <NavLink to = "/">
        <img className= "nav-bar" src={navImage} alt="nav-image"/>
    </NavLink>
</nav>
    )
}

export default Navbar;
