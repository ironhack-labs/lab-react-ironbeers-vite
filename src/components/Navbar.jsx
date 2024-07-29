import { Link } from 'react-router-dom';
import './Navbar.css';
import homeIcon from '../assets/home-icon.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-link">
        <img src={homeIcon} alt="Home" className="navbar-icon" />
      </Link>
    </nav>
  );
};

export default Navbar;
