import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../assets/home-icon.png';

function Navbar() {
    return (
        <nav>
            <Link to="/">
            <img src={homeIcon} alt="Home" style={{ height: '50px' }} /> {/* Use the image */}
            </Link>
        </nav>
    );
}

export default Navbar;
