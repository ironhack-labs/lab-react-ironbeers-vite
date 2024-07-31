import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './AllBeersPage.css';

const AllBeersPage = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const fetchBeers = async () => {
      const response = await fetch('https://ih-beers-api2.herokuapp.com/beers');
      const data = await response.json();
      console.log(data);
      setBeers(data);
    };

    fetchBeers();
  }, []);

  return (
    <div className="all-beers-page">
      <h1>All Beers</h1>
      <div className="beers-list">
        {beers.map((beer) => (
          <div key={beer._id} className="beer-card">
            <img src={beer.image_url} alt={beer.name} className="beer-image" />
            <div className="beer-info">
              <h2>{beer.name}</h2>
              <h3>{beer.tagline}</h3>
              <p>Contributed by: {beer.contributed_by}</p>
              <Link to={`/beers/${beer._id}`} className="details-link">More Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBeersPage;
