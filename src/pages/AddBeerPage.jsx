import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddBeerPage(props) {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  const handleNameInput = (e) => setName(e.target.value);
  const handleTaglineInput = (e) => setTagline(e.target.value);
  const handleDescriptionInput = (e) => setDescription(e.target.value);
  const handleFirstBrewedInput = (e) => setFirstBrewed(e.target.value);
  const handleBrewersTipsInput = (e) => setBrewersTips(e.target.value);
  const handleAttenuationLevelInput = (e) =>
    setAttenuationLevel(e.target.value);
  const handleContributedByInput = (e) => setContributedBy(e.target.value);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBeer = {
      name,
      tagline,
      description,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation_level: attenuationLevel,
      contributed_by: contributedBy,
    };

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
      .then(() => {
        setName("");
        setTagline("");
        setDescription("");
        setFirstBrewed("");
        setBrewersTips("");
        setAttenuationLevel(0);
        setContributedBy("");
        // Go home page
        navigate("/");
      });
  };

  return (
    <div className="AddBeer">
      <h1>Add New Beer</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          name="name"
          type="text"
          value={name}
          onChange={handleNameInput}
        />
        <label>Tagline</label>
        <input
          name="tagline"
          type="text"
          value={tagline}
          onChange={handleTaglineInput}
        />
        <label>Description</label>
        <input
          name="description"
          type="text"
          value={description}
          onChange={handleDescriptionInput}
        />
        <label>First Brewed</label>
        <input
          name="first_brewed"
          type="text"
          value={firstBrewed}
          onChange={handleFirstBrewedInput}
        />
        <label>Brewer's Tips</label>
        <input
          name="brewers_tips"
          type="text"
          value={brewersTips}
          onChange={handleBrewersTipsInput}
        />
        <label>Attenuation Level</label>
        <input
          name="attenuation_level"
          type="number"
          value={attenuationLevel}
          onChange={handleAttenuationLevelInput}
        />
        <label>Contributed By</label>
        <input
          name="contributed_by"
          type="text"
          value={contributedBy}
          onChange={handleContributedByInput}
        />
        <br></br>
        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
