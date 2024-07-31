import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AllBeersPage = () => {
  const [beers, setBeers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('https://ih-beers-api2.herokuapp.com/beers')
      .then(response => response.json())
      .then(data => {
        setBeers(data);
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching beers:', error);
      });
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    fetch(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
      .then(response => response.json())
      .then(data => {
        setBeers(data);
      })
      .catch(error => {
        console.error('Error searching beers:', error);
      });
  };

  return (
    <div className="all-beers-page">
      <h1>All Beers</h1>
      <input
        type="text"
        placeholder="Search beers..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <div className="beer-list">
        {beers.map(beer => (
          <div key={beer._id} className="beer-item">
            <img src={beer.image_url} alt={beer.name} />
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>
            <p><b>Contributed by:</b> {beer.contributed_by}</p>
            <Link to={`/beers/${beer._id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllBeersPage;
