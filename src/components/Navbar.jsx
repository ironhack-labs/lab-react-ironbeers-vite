import { Link } from 'react-router-dom';
import homeIcon from '../assets/homeIcon.png';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/"><img src={homeIcon} className="home-icon" /> </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;