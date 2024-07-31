import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BeerDetailsPage = () => {
  const { beerId } = useParams();
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    const fetchBeer = async () => {
      try {
        const response = await fetch(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`);
        const data = await response.json();
        setBeer(data);
      } catch (error) {
        console.error('Error fetching the beer details:', error);
      }
    };

    fetchBeer();
  }, [beerId]);

  if (!beer) {
    return <div>Loading...</div>;
  }

  return (
    <div className="beer-details-page">
      <img src={beer.image_url} alt={beer.name} />
      <h1>{beer.name}</h1>
      <div className="beer-info">
        <p>{beer.tagline}</p>
        <p><strong>First Brewed:</strong> {beer.first_brewed}</p>
        <p><strong>Attenuation Level:</strong> {beer.attenuation_level}</p>
        <p>{beer.description}</p>
        <p><strong>Contributed By:</strong> {beer.contributed_by}</p>
      </div>
    </div>
  );
};

export default BeerDetailsPage;