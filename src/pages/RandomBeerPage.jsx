import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RandomBeerPage = () => {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    const fetchRandomBeer = async () => {
      try {
        const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random');
        setBeer(response.data);
      } catch (error) {
        console.error('Error fetching random beer:', error);
      }
    };

    fetchRandomBeer();
  }, []);

  if (!beer) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{beer.name}</h1>
      <img src={beer.image_url} alt={beer.name} />
      <p>{beer.tagline}</p>
      <p>First Brewed: {beer.first_brewed}</p>
      <p>Attenuation Level: {beer.attenuation_level}</p>
      <p>{beer.description}</p>
      <p>Contributed By: {beer.contributed_by}</p>
    </div>
  );
};

export default RandomBeerPage;