import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './BeerDetailsPage.css';

const BeerDetailsPage = () => {
  const { beerId } = useParams();
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    const fetchBeerDetails = async () => {
      const response = await fetch(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`);
      const data = await response.json();
      console.log(data);
      setBeer(data);
    };

    fetchBeerDetails();
  }, [beerId]);

  if (!beer) return <div>Loading...</div>;

  return (
    <div className="beer-details-page">
      <h1>{beer.name}</h1>
      <img src={beer.image_url} alt={beer.name} className="beer-detail-image" />
      <h2>{beer.tagline}</h2>
      <p><strong>First Brewed:</strong> {beer.first_brewed}</p>
      <p><strong>Attenuation Level:</strong> {beer.attenuation_level}</p>
      <p><strong>Description:</strong> {beer.description}</p>
      <p><strong>Contributed By:</strong> {beer.contributed_by}</p>
    </div>
  );
};

export default BeerDetailsPage;
