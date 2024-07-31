import React, { useState } from 'react';
import './AddBeerPage.css';

const AddBeerPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const dataToSend = {
      ...formData,
      attenuation_level: Number(formData.attenuation_level)
    };

    const response = await fetch('https://ih-beers-api2.herokuapp.com/beers/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    });

    if (response.ok) {
      alert('Beer added successfully!');

      setFormData({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: '',
        contributed_by: ''
      });
    } else {
      alert('Error adding beer. Please try again.');
    }
  };

  return (
    <div className="add-beer-page">
      <h1>Add a New Beer</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="tagline">Tagline:</label>
          <input
            id="tagline"
            name="tagline"
            type="text"
            value={formData.tagline}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="first_brewed">First Brewed:</label>
          <input
            id="first_brewed"
            name="first_brewed"
            type="text"
            value={formData.first_brewed}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="brewers_tips">Brewer's Tips:</label>
          <input
            id="brewers_tips"
            name="brewers_tips"
            type="text"
            value={formData.brewers_tips}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="attenuation_level">Attenuation Level:</label>
          <input
            id="attenuation_level"
            name="attenuation_level"
            type="number"
            value={formData.attenuation_level}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contributed_by">Contributed By:</label>
          <input
            id="contributed_by"
            name="contributed_by"
            type="text"
            value={formData.contributed_by}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
};

export default AddBeerPage;
