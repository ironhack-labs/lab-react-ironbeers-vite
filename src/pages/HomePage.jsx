import { Link } from "react-router-dom";
import image1 from "../assets/beers.png";
import image2 from "../assets/random-beer.png"
import image3 from "../assets/new-beer.png"

function HomePage() {
  return (
    <div className="HomePage">
      <div className="beer-container">
        <img src={image1} />
        <h2>All Beers</h2>
        <button>
          <Link to="/beers">Show me all Beers</Link>
        </button>
      </div>
      <div className="beer-container">
        <img src={image2} />
        <h2>Random Beer</h2>
        <button>
          <Link to="/random-beer">Show me a random Beer</Link>
        </button>
      </div>
      <div className="beer-container">
        <img src={image3} />
        <h2>New Beer</h2>
        <button>
          <Link to="new-beer">Show me a new Beer</Link>
        </button>
      </div>
    </div>
  );
}

export default HomePage;
