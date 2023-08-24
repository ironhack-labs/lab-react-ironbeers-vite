import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";



function Navbar() {
    return (

        <div className="bg-primary text-center">
            <Link to={'/'} className='nav-link'>
                <img src="/src/assets/home-icon.png" alt="" />
            </Link>
        </div>
    )
}

export default Navbar;
