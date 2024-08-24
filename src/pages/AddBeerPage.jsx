import { useState } from "react";
import axios from "axios";

function AddBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", {
        name,
        tagline,
        description,
        first_brewed: firstBrewed,
        brewers_tips: brewersTips,
        attenuation_level: attenuationLevel,
        contributed_by: contributedBy,
      })
      .then((response) => {
        console.log(response.status);
        setName("");
        setTagline("");
        setDescription("");
        setFirstBrewed("");
        setBrewersTips("");
        setAttenuationLevel(0);
        setContributedBy("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="AddBeerPage">
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Tagline
          <input
            name="tagline"
            type="text"
            value={tagline}
            onChange={(e) => setTagline(e.target.value)}
          />
        </label>
        <label>
          Description
          <textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          First Brewed
          <input
            name="first_brewed"
            type="text"
            value={firstBrewed}
            onChange={(e) => setFirstBrewed(e.target.value)}
          />
        </label>
        <label>
          Brewers Tips
          <input
            name="brewers_tips"
            type="text"
            value={brewersTips}
            onChange={(e) => setBrewersTips(e.target.value)}
          />
        </label>
        <label>
          Attenuation Level
          <input
            name="attenuation_level"
            type="number"
            value={attenuationLevel}
            onChange={(e) => setAttenuationLevel(e.target.value)}
          />
        </label>
        <label>
          Contributed By
          <input
            name="contributed_by"
            type="text"
            value={contributedBy}
            onChange={(e) => setContributedBy(e.target.value)}
          />
        </label>
        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
