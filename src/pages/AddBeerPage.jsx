import React, { useState } from 'react';
import axios from 'axios';

const AddBeerPage = () => {
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [firstBrewed, setFirstBrewed] = useState('');
  const [brewersTips, setBrewersTips] = useState('');
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
        name,
        tagline,
        description,
        first_brewed: firstBrewed,
        brewers_tips: brewersTips,
        attenuation_level: attenuationLevel,
        contributed_by,
      });

      console.log('Beer added successfully:', response.data);
    } catch (error) {
      console.error('Error adding beer:', error);
    }
  };

  return (
    <div>
      <h1>Add a New Beer</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="tagline">Tagline:</label>
          <input type="text" id="tagline" name="tagline" value={tagline} onChange={(e) => setTagline(e.target.value)} />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label htmlFor="first_brewed">First Brewed:</label>
          <input type="text" id="first_brewed" name="first_brewed" value={firstBrewed} onChange={(e) => setFirstBrewed(e.target.value)} />
        </div>
        <div>
          <label htmlFor="brewers_tips">Brewer's Tips:</label>
          <input type="text" id="brewers_tips" name="brewers_tips" value={brewersTips} onChange={(e) => setBrewersTips(e.target.value)} />
        </div>
        <div>
          <label htmlFor="attenuation_level">Attenuation Level:</label>
          <input type="number" id="attenuation_level" name="attenuation_level" value={attenuationLevel} onChange={(e) => setAttenuationLevel(Number(e.target.value))} />
        </div>
        <div>
          <label htmlFor="contributed_by">Contributed By:</label>
          <input type="text" id="contributed_by" name="contributed_by" value={contributedBy} onChange={(e) => setContributedBy(e.target.value)} />
        </div>
        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
};

export default AddBeerPage;