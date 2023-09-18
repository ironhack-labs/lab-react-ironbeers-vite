import { NavLink } from "react-router-dom";
import "./Navbar.css"

function Navbar() {


    return (
        <nav >
            <NavLink to={"/"}>
            <img src="../src/assets/home-icon.png" alt="home-icon" />
            </NavLink>
        </nav>
    )


}

export default Navbar;
