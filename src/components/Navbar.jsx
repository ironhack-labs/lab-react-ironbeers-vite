import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <nav id="navbar">
        <Link to={'./'}>
          <img src="/home-icon.png" alt="" />
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
