import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  // axios code
  return (
    <div id="Home">
      <Link to={'/beers'} className="category">
        <img src="public/beers.png" />
        <h1>All Beers</h1>
        <p>Lorem Ipsum</p>
      </Link>
      <Link to={'/random-beer'} className="category">
        <img src="random-beer.png" />
        <h1>Random Beer</h1>
        <p>Lorem Ipsum</p>
      </Link>
      <Link to={'/new-beer'} className="category">
        <img src="new-beer.png" />
        <h1>Add Beer</h1>
        <p>Lorem Ipsum</p>
      </Link>
    </div>
  );
}

export default HomePage;
