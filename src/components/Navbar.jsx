import { NavLink } from "react-router-dom";
import home from './../assets/home-icon.png'
function Navbar() {
    return (
        <nav className="Navbar">
            <NavLink to="/">
                <img src={home} alt="" />
            </NavLink>
        </nav>
    )
}
export default Navbar;