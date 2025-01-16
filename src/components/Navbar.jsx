import HomeIcon from '../assets/home-icon.png';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={{ background: 'lightblue', textAlign: 'center'}}>
            <Link to={'/'}>
                <img src={HomeIcon} />
            </Link>
        </nav>
    )
}

export default Navbar;
