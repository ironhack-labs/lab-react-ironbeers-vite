import { NavLink } from "react-router-dom";
import homeNav from "../assets/home-icon.png";

function Navbar() {
  return (
    <nav className="navBar">
      <NavLink to="/" className="homeNav">
        <img src={homeNav} alt="home" />
      </NavLink>
    </nav>
  );
}

export default Navbar;
