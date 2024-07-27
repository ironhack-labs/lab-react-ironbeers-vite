import { useState, useEffect } from "react";

function AddBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [contributedBy, setContributedBy] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://ih-beers-api2.herokuapp.com/beers/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        tagline: tagline,
        description: description,
        first_brewed: firstBrewed,
        contributed_by: contributedBy,
        attenuation_level: attenuationLevel,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="bg-slate-900 text-white p-10 h-screen flex flex-row justify-center">
      <div className="w-1/2 h-1/2">
        <form
          action=""
          className="flex flex-col justify-center"
          onSubmit={handleSubmit}
        >
          <label htmlFor="name">Name</label>
          <input
            className="rounded-lg text-black"
            type="text"
            name="name"
            id="name"
           
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="tagline">Tagline</label>
          <input
            className="rounded-lg text-black"
            type="text"
            name="tagline"
            id="tagline"
            
            onChange={(e) => setTagline(e.target.value)}
          />
          <label htmlFor="description">Description</label>
          <textarea
            className="rounded-lg text-black"
            name="description"
            id="description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
          <label htmlFor="first_brewed">First Brewed</label>
          <input
            className="rounded-lg text-black"
            type="text"
            name="first_brewed"
            id="first_brewed"
            value={firstBrewed}
            onChange={(e) => setFirstBrewed(e.target.value)}
          />
          <label htmlFor="contributed_by">Contributed By</label>
          <input
            className="rounded-lg text-black"
            type="text"
            name="contributed_by"
            id="contributed_by"
            value={contributedBy}
            onChange={(e) => setContributedBy(e.target.value)}
          />
          <label htmlFor="attenuation_level">Attenuation Level</label>
          <input
            className="rounded-lg text-black"
            type="number"
            name="attenuation_level"
            id="attenuation_level"
            value={attenuationLevel}
            onChange={(e) => setAttenuationLevel(e.target.value)}
          />
          <button type="submit">Add Beer</button>
        </form>
      </div>
    </div>
  );
}

export default AddBeerPage;
