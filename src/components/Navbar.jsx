import { NavLink } from "react-router-dom";
import homeIcon from "../assets/home-icon.png"

function Navbar() {
    const navStyle = {
        backgroundColor : "#03a9f4",
        textAlign: "center",
        padding: "5px"
    }
    const iconStyle = {
        width: "10%"
    }
    return (
        <div style={navStyle}>
            <NavLink to="/">
                <img src={homeIcon} alt="home icon" style={iconStyle}/>
            </NavLink>
        </div>
    )
}

export default Navbar;
