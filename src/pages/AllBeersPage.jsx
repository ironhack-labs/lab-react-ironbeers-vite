import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import BeerCard from '../components/BeerCard'; // Import the BeerCard component

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  const fetchBeers = async () => {
    try {
      const response = await fetch('https://ih-beers-api2.herokuapp.com/beers');
      const data = await response.json();
      console.log(data); // Log the response data to visualize the structure
      setBeers(data);
    } catch (error) {
      console.error('Error fetching the beers:', error);
    }
  };

  useEffect(() => {
    fetchBeers();
  }, []);

  return (
    <div>
      <Navbar />
      <h1>All Beers</h1>
      <ul>
        {beers.map(beer => (
          <BeerCard key={beer._id} beer={beer} /> // Use the BeerCard component
        ))}
      </ul>
    </div>
  );
}

export default AllBeersPage;