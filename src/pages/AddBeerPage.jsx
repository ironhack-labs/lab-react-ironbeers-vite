import { useState } from "react";
import axios from "axios";

function AddBeerPage() {
  const [formState, setFormState] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", formState)
      .then((response) => {
        console.log(response.data);
        setFormState({
          name: "",
          tagline: "",
          description: "",
          first_brewed: "",
          brewers_tips: "",
          attenuation_level: 0,
          contributed_by: "",
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="AddBeerPage">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Tagline:
          <input
            type="text"
            name="tagline"
            value={formState.tagline}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={formState.description}
            onChange={handleInputChange}
          />
        </label>
        <label>
          First Brewed:
          <input
            type="text"
            name="first_brewed"
            value={formState.first_brewed}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Brewer's Tips:
          <input
            type="text"
            name="brewers_tips"
            value={formState.brewers_tips}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Attenuation Level:
          <input
            type="number"
            name="attenuation_level"
            value={formState.attenuation_level}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Contributed By:
          <input
            type="text"
            name="contributed_by"
            value={formState.contributed_by}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
