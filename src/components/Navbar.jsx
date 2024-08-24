import { Link } from "react-router-dom";
import homePagePic from "../assets/home-icon.png"

function Navbar() {
    return (
        <nav className="Navbar">
            <Link to="/">
                <img src={homePagePic} alt="Home page"/>
            </Link>
        </nav>
    )
}

export default Navbar;
