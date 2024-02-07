import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddBeerPage.css';

function AddBeerPage() {
  const navigate = useNavigate();

  const [newBeerCreated, setnewBeerCreated] = useState({
    name: '',
    tagline: '',
  });

  function handleSubmit() {
    e.preventDefault();

    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', newBeerCreated)
      .then(() => {
        navigate('/beers');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleChange(e) {
    const nameOfField = e.target.getAttribute('name');
    const value = e.target.value;
    const newObject = { ...newBeerCreated };
    newObject[nameOfField] = value;
    setnewBeerCreated(newObject);
  }

  return (
    <div id="AddBeer">
      <form id="add-beer">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={newBeerCreated.name}
          onChange={handleChange}
        />
        <label>Tagline</label>
        <textarea
          type="text"
          name="tagline"
          value={newBeerCreated.tagline}
          onChange={handleChange}
        />
        <label>Tagline</label>
        <input
          type="text"
          name="tagline"
          value={newBeerCreated.tagline}
          onChange={handleChange}
        />
        <label>Description</label>
        <input
          type="text"
          name="tagline"
          value={newBeerCreated.tagline}
          onChange={handleChange}
        />
        <label>First Brewed</label>
        <input
          type="text"
          name="tagline"
          value={newBeerCreated.tagline}
          onChange={handleChange}
        />
        <label>Brewers Tips</label>
        <input
          type="text"
          name="tagline"
          value={newBeerCreated.tagline}
          onChange={handleChange}
        />
        <label>Attenuation Level</label>
        <input
          type="text"
          name="tagline"
          value={newBeerCreated.tagline}
          onChange={handleChange}
        />
        <label>Contributed By</label>
        <input
          type="text"
          name="tagline"
          value={newBeerCreated.tagline}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default AddBeerPage;
