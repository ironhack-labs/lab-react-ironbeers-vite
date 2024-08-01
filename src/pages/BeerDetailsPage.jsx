import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './BeerDetailsPage.css';
import Navbar from '../components/Navbar';
import BeerCardDetails from '../components/BeerCardDetails';

function BeerDetailsPage() {
  const { beerId } = useParams();
  const [beer, setBeer] = useState(null);

const fetchBeerDetails = async () => {
    try {
    const response = await fetch(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`);
    const data = await response.json();
    console.log(data); // Log the response data to visualize the structure
    setBeer(data);
    } catch (error) {
    console.error('Error fetching the beer details:', error);
    }
};


  useEffect(() => {
    fetchBeerDetails();
  }, [beerId]);

  if (!beer) {
    return <div>Loading...</div>;
  }

  return (
    <div className="page">
        <Navbar />
        <BeerCardDetails beer={beer} />
    </div>

  );
}

export default BeerDetailsPage;