import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to IronBeers!</h1>
      <nav>
        <ul>
          <li>
            <Link to="/beers" className="button-79">All Beers</Link>
          </li>
          <li>
            <Link to="/random-beer" className="button-79">Random Beer</Link>
          </li>
          <li>
            <Link to="/new-beer" className="button-79">New Beer</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HomePage;