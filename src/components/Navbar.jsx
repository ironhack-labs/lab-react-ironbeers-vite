import imageHome from "../assets/home-icon.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="Navbar">
      <Link to="/">
        <img src={imageHome} />
      </Link>
    </nav>
  );
}

export default Navbar;
