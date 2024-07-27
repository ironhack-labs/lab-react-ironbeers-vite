import { useState, useEffect } from "react";

function RandomBeersPage() {
  const [randomBeer, setRandomBeer] = useState([]);
  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((res) => res.json())
      .then((data) => setRandomBeer(data));
  }, []);
  if (randomBeer.length === 0) {
    return (
      <div className="bg-slate-900 text-white p-10 h-screen">
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div className="bg-slate-900 text-white p-10 h-screen">
      <div className="w-1/2  bg-slate-800 rounded-lg p-10 m-5">
        <img src={randomBeer.image_url} alt="" className="w-32 h-32" />
        <h1 className="text-2xl font-bold">{randomBeer.name}</h1>
        <p className="text-xl">{randomBeer.tagline}</p>
        <p>{randomBeer.description}</p>
        <p>First Brewed: {randomBeer.first_brewed}</p>
        <p>{randomBeer.contributed_by}</p>
        <p>Attenuation Level: {randomBeer.attenuation_level}</p>
      </div>
    </div>
  );
}

export default RandomBeersPage;
