import React, { useState, useEffect } from 'react';

const RandomBeerPage = () => {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    const fetchRandomBeer = async () => {
      try {
        const response = await fetch('https://ih-beers-api2.herokuapp.com/beers/random');
        const data = await response.json();
        setBeer(data);
      } catch (error) {
        console.error('Error fetching the random beer:', error);
      }
    };

    fetchRandomBeer();
  }, []);

  if (!beer) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={beer.image_url} alt={beer.name} />
      <h1>{beer.name}</h1>
      <p>{beer.tagline}</p>
      <p><strong>First Brewed:</strong> {beer.first_brewed}</p>
      <p><strong>Attenuation Level:</strong> {beer.attenuation_level}</p>
      <p>{beer.description}</p>
      <p><strong>Contributed By:</strong> {beer.contributed_by}</p>
    </div>
  );
};

export default RandomBeerPage;