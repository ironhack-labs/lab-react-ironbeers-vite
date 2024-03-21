import { Link } from "react-router-dom";


function Navbar() {
    return (
        <nav>
        <Link to="/" className="home-icon">
            <i className="fas fa-home"></i>
        </Link>
      </nav>
    )
}
export default Navbar;