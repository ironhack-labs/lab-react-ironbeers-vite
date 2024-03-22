import { useState } from "react";
import axios from "axios";

function AddBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [brewers_tips, setBrewers_tips] = useState("");
  const [attenuation_level, setAttenuation_level] = useState(0);
  const [contributed_by, setContributed_by] = useState("");

  const handlenameInput = (e) => setName(e.target.value);
  const handletaglineInput = (e) => setTagline(e.target.value);
  const handledescriptionInput = (e) => setDescription(e.target.value);
  const handlebrewers_tipsInput = (e) => setBrewers_tips(e.target.value);
  const handleattenuation_levelInput = (e) =>
    setAttenuation_level(e.target.value);
  const handlecontributed_byInput = (e) => setContributed_by(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBeer = {
      name,
      tagline,
      description,
      brewers_tips,
      attenuation_level,
      contributed_by,
    };

    console.log("Submitted: ", newBeer);

    const BASE_URL = "https://ih-beers-api2.herokuapp.com/beers/new";

    axios
      .post(BASE_URL, newBeer)
      .then((response) => {
        console.log("Success:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name: </label>
      <br />
      <input type="text" name="name" value={name} onChange={handlenameInput} />
      <br />
      <br />
      <label>Tagline: </label>
      <br />
      <input
        type="text"
        name="tagline"
        value={tagline}
        onChange={handletaglineInput}
      />
      <br />
      <br />
      <label>Description: </label>
      <br />
      <input
        type="text"
        name="first_brewed"
        value={description}
        onChange={handledescriptionInput}
      />
      <br />
      <br />
      <label>Brewer&aposs Tips: </label>
      <br />
      <input
        type="text"
        name="brewers_tips"
        value={brewers_tips}
        onChange={handlebrewers_tipsInput}
      />
      <br />
      <br />
      <label>Attenuation Level: </label>
      <br />
      <input
        type="number"
        name="attenuation_level"
        value={attenuation_level}
        onChange={handleattenuation_levelInput}
      />
      <br />
      <br />
      <label>Contributed By: </label>
      <br />
      <input
        type="text"
        name="contributed_by"
        value={contributed_by}
        onChange={handlecontributed_byInput}
      />
      <br />
      <br />
      <button type="submit">Add Beer"</button>
      <br />
    </form>
  );
}

export default AddBeerPage;
