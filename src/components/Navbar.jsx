import { Link } from "react-router-dom";
import home from "../assets/home-icon.png"

function Navbar() {
    return (
        <Link to="/" className="btn btn-dark">
            <img style={{ backgroundColor: 'pink' }} src={home} alt="" />
        </Link>

    )
}

export default Navbar;
