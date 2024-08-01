import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllBeersPage = () => {
  const [beers, setBeers] = useState([]);

  const getBeers = async () => {
    try {
      const response = await fetch('https://ih-beers-api2.herokuapp.com/beers');
      const data = await response.json();
      console.log(data);
      setBeers(data);
    } catch (err) {
      console.log("An error occurred while fetching beers", err);
    }
  };


  useEffect(() => {
    getBeers();
  }, []);

  return (
    <div>
      <h1>All Beers</h1>
      <ul>
        {beers.map((beer) => (
          <li key={beer._id}>
            <Link to={`/beers/${beer._id}`}>
              <img src={beer.image_url} alt={beer.name} />
              <h2>{beer.name}</h2>
              <p>{beer.tagline}</p>
              <p>Contributed by: {beer.contributed_by}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllBeersPage;