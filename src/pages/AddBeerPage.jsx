import React, { useState } from 'react';
import BeerCreateForm from '../components/BeerCreateForm';
import Navbar from '../components/Navbar';

const AddBeerPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'attenuation_level' ? Number(value) : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://ih-beers-api2.herokuapp.com/beers/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Beer added successfully!');
        setFormData({
          name: '',
          tagline: '',
          description: '',
          first_brewed: '',
          brewers_tips: '',
          attenuation_level: 0,
          contributed_by: ''
        });
      } else {
        alert('Failed to add beer');
      }
    } catch (error) {
      console.error('Error adding beer:', error);
      alert('Error adding beer');
    }
  };

  return (
    <div>
        <Navbar/>
        <BeerCreateForm 
      handleSubmit={handleSubmit} 
      handleChange={handleChange} 
      formData={formData} 
    />
    </div>
    
  );
};

export default AddBeerPage;