import { Link } from "react-router-dom";
import Home from "../assets/home-icon.png";

function Navbar() {
  return (
    <nav>
      <div className="bg-dark container-fluid d-flex row justify-content-center fixed-top">
        <div className="d-flex col-4 p-1 justify-content-start">
          <Link to="/">
            <img src={Home} width={40}></img>
          </Link>
        </div>
        <div className="d-flex justify-content-around align-items-center col-6">
          <Link className="ms-5 text-white" to="/beers">
            {" "}
            All Beers
          </Link>
          <Link className="ms-5 text-white" to="/random-beer">
            Random Beer
          </Link>
          <Link className="ms-5 text-white" to="/new-beer">
            New Beer
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
