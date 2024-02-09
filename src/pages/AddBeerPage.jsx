import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddBeerPage.css';

function AddBeerPage() {
  const navigate = useNavigate();

  const [newBeerCreated, setnewBeerCreated] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: ''
  });

  function handleSubmit(e) {
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
    console.log(nameOfField, 'here the nameOfField')
    const value = e.target.value;
    const newObject = { ...newBeerCreated };
    newObject[nameOfField] = value;
    setnewBeerCreated(newObject);
  }

  return (
    <div id="AddBeer">
      <form id="add-beer" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={newBeerCreated.name} // I think it is not mandatory to write it
          onChange={handleChange}
        />
        <label>Tagline</label>
        <textarea
          type="text"
          name="tagline"
          value={newBeerCreated.tagline}
          onChange={handleChange}
        />
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={newBeerCreated.description}
          onChange={handleChange}
        />
        <label>First Brewd</label>
        <input
          type="text"
          name="first_brewed"
          value={newBeerCreated.first_brewed}
          onChange={handleChange}
        />
        <label>Brewer's Tips</label>
        <input
          type="text"
          name="brewers_tips"
          value={newBeerCreated.brewers_tips}
          onChange={handleChange}
        />
        <label>Attenuation Level</label>
        <input
          type="number"
          name="attenuation_level"
          value={newBeerCreated.attenuation_level}
          onChange={handleChange}
        />        
        <label>Contributed By</label>
        <input
          type="text"
          name="contributed_by"
          value={newBeerCreated.contributed_by}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
