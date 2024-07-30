import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return (
        <nav className="nav-bar">
            <Link className="link" to="/"> <img src="src\assets\home-icon.png" alt="" /> </Link>
        </nav>
    )
}

export default Navbar;
