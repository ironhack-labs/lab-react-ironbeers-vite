import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container justify-content-center">
                <NavLink to="/" className="navbar-brand">
                    <img src="\src\assets\home-icon.png" alt="Home" />
                </NavLink>
            </div>
        </nav>
    )
}


export default Navbar;
