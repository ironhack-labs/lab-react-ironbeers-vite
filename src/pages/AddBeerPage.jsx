import { useState } from 'react';
import axios from 'axios';

const AddBeerPage = () => {
  const [beerData, setBeerData] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBeerData({
      ...beerData,
      [name]: name === 'attenuation_level' ? parseFloat(value) : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', beerData)
      .then(response => {
        console.log('Beer added successfully:', response.data);
      })
      .catch(error => {
        console.error('Error al agregar cerveza:', error);
      })

      .finally(() => {
        setBeerData({
          name: '',
          tagline: '',
          description: '',
          first_brewed: '',
          brewers_tips: '',
          attenuation_level: 0,
          contributed_by: '',
        });
      });

  };

  return (
    <div>
      <h1>Add Beer</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre de etiqueta:</label>
          <input type="text" id="name" name="name" value={beerData.name} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="tagline">Etiqueta: Lema</label>
          <input type="text" id="tagline" name="tagline" value={beerData.tagline} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="description">Etiqueta: Descripción</label>
          <textarea id="description" name="description" value={beerData.description} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="first_brewed">Etiqueta: Primera elaboración</label>
          <input type="text" id="first_brewed" name="first_brewed" value={beerData.first_brewed} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="brewers_tips">Etiqueta: Consejos del cervecero</label>
          <input type="text" id="brewers_tips" name="brewers_tips" value={beerData.brewers_tips} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="attenuation_level">Etiqueta: Nivel de atenuación</label>
          <input type="number" id="attenuation_level" name="attenuation_level" value={beerData.attenuation_level} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="contributed_by">Etiqueta: Contribuido por</label>
          <input type="text" id="contributed_by" name="contributed_by" value={beerData.contributed_by} onChange={handleChange} required />
        </div>
        <div>
          <button type="submit">Agregar cerveza</button>
        </div>
      </form>
    </div>
  );
};

export default AddBeerPage;
