import React, { useEffect, useState } from 'react';
import './RandomBeerPage.css';

const RandomBeerPage = () => {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    const fetchRandomBeer = async () => {
      const response = await fetch('https://ih-beers-api2.herokuapp.com/beers/random');
      const data = await response.json();
      console.log(data);
      setBeer(data);
    };

    fetchRandomBeer();
  }, []);

  if (!beer) return <div>Loading...</div>;

  return (
    <div className="random-beer-page">
      <h1>{beer.name}</h1>
      <img src={beer.image_url} alt={beer.name} className="random-beer-image" />
      <h2>{beer.tagline}</h2>
      <p><strong>First Brewed:</strong> {beer.first_brewed}</p>
      <p><strong>Attenuation Level:</strong> {beer.attenuation_level}</p>
      <p><strong>Description:</strong> {beer.description}</p>
      <p><strong>Contributed By:</strong> {beer.contributed_by}</p>
    </div>
  );
};

export default RandomBeerPage;
