import { Link } from "react-router-dom";

function Navbar() {

    return (
    <nav className="navbar bg-primary mb-3">
        <div className="container justify-content-center">
            <Link to="/">
                <img src="/src/assets/home-icon.png" />
            </Link>
        </div>
    </nav>
    );
}

export default Navbar;
