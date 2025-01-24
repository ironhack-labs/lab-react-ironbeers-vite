import { Link } from "react-router-dom"
import HomeIcon from "../assets/home-icon.png"
function Navbar() {
    return (
        <div className="navbar">
            <Link to={"/"}><img src={HomeIcon} alt="home icon"/></Link>
        </div>
    )
}

export default Navbar;
