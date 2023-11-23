import "./Navbar.css"
import home from './../assets/home-icon.png'
import { NavLink } from "react-router-dom";
function Navbar() {

    return (
        <div className="Navbar home">
            <NavLink to={'/'}><img src={home} alt="home" /></NavLink>
        </div >

    )
}

export default Navbar;
