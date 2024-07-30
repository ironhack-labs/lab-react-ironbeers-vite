import React, { useState } from 'react';

const AddBeerPage = () => {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirst_Brewed] = useState("");
  const [brewers_tips, setBrewers_Tips] = useState("");
  const [attenuation_level, setAttenuation_level] = useState(0);
  const [contributed_by, setContributed_by] = useState("");

  const handleNameInput = (e) => {
    setName(e.target.value);
  };

  const handleTaglineInput = (e) => {
    setTagline(e.target.value);
  };

  const handleDescriptionInput = (e) => {
    setDescription(e.target.value);
  };

  const handleFirst_BrewedInput = (e) => {
    setFirst_Brewed(e.target.value);
  };

  const handleBrewers_TipsInput = (e) => {
    setBrewers_Tips(e.target.value);
  };

  const handleAttenuation_LevelInput = (e) => {
    setAttenuation_level(e.target.value);
  };

  const handleContributed_ByInput = (e) => {
    setContributed_by(e.target.value);
  };

  const createBeer = async (newBeer) => {
    try {
      console.log(JSON.stringify(newBeer));
      const response = await fetch("https://ih-beers-api2.herokuapp.com/beers/new", {
        method: "POST",
        body: JSON.stringify(newBeer),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      // Optionally, you can call a function to refresh the list of beers
      // getBeers();
    } catch (e) {
      console.error(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBeer = {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: first_brewed,
      brewers_tips: brewers_tips,
      attenuation_level: attenuation_level,
      contributed_by: contributed_by,
    };
    console.log(newBeer);

    createBeer(newBeer);

    setName("");
    setDescription("");
    setTagline("");
    setFirst_Brewed("");
    setBrewers_Tips("");
    setAttenuation_level(0);
    setContributed_by("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          onChange={handleNameInput}
          value={name}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="tagline">Tagline: </label>
        <input
          type="text"
          id="tagline"
          onChange={handleTaglineInput}
          value={tagline}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="description">Description: </label>
        <input
          type="text"
          id="description"
          onChange={handleDescriptionInput}
          value={description}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="first_brewed">First Brewed: </label>
        <input
          type="text"
          id="first_brewed"
          onChange={handleFirst_BrewedInput}
          value={first_brewed}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="brewers_tips">Brewers Tips: </label>
        <input
          type="text"
          id="brewers_tips"
          onChange={handleBrewers_TipsInput}
          value={brewers_tips}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="attenuation_level">Attenuation Level: </label>
        <input
          type="number"
          id="attenuation_level"
          onChange={handleAttenuation_LevelInput}
          value={attenuation_level}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="contributed_by">Contributed By: </label>
        <input
          type="text"
          id="contributed_by"
          onChange={handleContributed_ByInput}
          value={contributed_by}
        />
      </fieldset>
      <button type="submit">Add Beer</button>
    </form>
  );
};

export default AddBeerPage;