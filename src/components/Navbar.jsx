import { Link } from "react-router-dom";
import navImg from "../assets/home-icon.png"
import "./Navbar.css"
function Navbar() {

    return (
        <nav>
            <div className="container-fluid">
                <Link to='/'>
                <img src={navImg} alt="Home" width={'30px'} />
            </Link>
        </div>
        </nav >
    )
}

export default Navbar;
