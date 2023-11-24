import { NavLink } from "react-router-dom";
import Home from './../assets/home-icon.png'
import './Navbar.css'

function Navbar() {
    return (
        <nav className='navBar'>
            <NavLink to="/">
                <img src={Home} alt="Home" />
            </NavLink>
        </nav>
    )
}

export default Navbar;
