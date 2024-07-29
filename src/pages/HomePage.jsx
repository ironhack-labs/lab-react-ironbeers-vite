import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import beersIcon from "../assets/beers.png";
import randomBeerIcon from "../assets/random-beer.png";
import newBeerIcon from "../assets/new-beer.png";

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to IronBeers</h1>
      <nav>
        <ul>
          <li>
            <Link to="/beers">
              <div className="nav-item">
                <span>All Beers</span>
                <img src={beersIcon} alt="All Beers" className="nav-icon" />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/random-beer">
              <div className="nav-item">
                <span>Random Beer</span>
                <img src={randomBeerIcon} alt="Random Beer" className="nav-icon" />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/new-beer">
              <div className="nav-item">
                <span>Add New Beer</span>
                <img src={newBeerIcon} alt="Add New Beer" className="nav-icon" />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
