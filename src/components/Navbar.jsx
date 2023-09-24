import {Link} from "react-router-dom";

function Navbar() {
    
    return(
    <nav className="navbar bg-primary bg-gradient">
        <div className="container d-flex justify-content-center align-items-center">
            <Link to={"/"}>
                <img src="./src/assets/home-icon.png"/>
            </Link>
        </div>
    </nav>
    )
}

export default Navbar;
