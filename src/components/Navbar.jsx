import { Link } from "react-router-dom";
import homeIcon from "../assets/home-icon.png"

function Navbar() {
    return (
        <nav className="navbar">
            <div className="container">
                <Link className="" to="/" > <img src={homeIcon} alt="" /></Link>
            </div>
        </nav>
    );
}

export default Navbar;