import './Navbar.css'
import { Link } from 'react-router-dom';
import mainIcon from './../assets/home-icon.png'

function Navbar() {

    return (
        <>
            <div className="Navbar">
                <Link to={'/'}><img src={mainIcon} alt="" /></Link>
            </div>
        </>
    )

}

export default Navbar;
