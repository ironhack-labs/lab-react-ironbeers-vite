import React, { useState } from 'react';

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
      [name]: value
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
      const data = await response.json();
      console.log('New beer created:', data);
      alert('New beer successfully saved to database!');
    } catch (error) {
      console.error('Error creating new beer:', error);
    }
  };

  return (
    <div className="add-beer-page">
      <h1>Add New Beer</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Tagline:
          <input type="text" name="tagline" value={formData.tagline} onChange={handleChange} required />
        </label>
        <label>
          Description:
          <textarea name="description" value={formData.description} onChange={handleChange} required />
        </label>
        <label>
          First Brewed:
          <input type="text" name="first_brewed" value={formData.first_brewed} onChange={handleChange} required />
        </label>
        <label>
          Brewer's Tips:
          <input type="text" name="brewers_tips" value={formData.brewers_tips} onChange={handleChange} required />
        </label>
        <label>
          Attenuation Level:
          <input type="number" name="attenuation_level" value={formData.attenuation_level} onChange={handleChange} required />
        </label>
        <label>
          Contributed By:
          <input type="text" name="contributed_by" value={formData.contributed_by} onChange={handleChange} required />
        </label>
        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
};

export default AddBeerPage;