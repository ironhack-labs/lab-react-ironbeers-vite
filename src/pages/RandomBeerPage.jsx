import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function RandomBeersPage() {
  const [foundBeer, setFoundBeer] = useState(null);
  const { beerId } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((response) => {
        setFoundBeer(response.data);
      });
  }, [beerId]);

  if (!foundBeer) {
    return <p>Loading...</p>;  
  }

  return (
    <div className="random">
      <h1>Random Beer</h1>
      <div className="random">
        <img src={foundBeer.image_url} width={100} alt={foundBeer.name} />
      </div>
      <div className="col">
        <h2>{foundBeer.name}</h2>
        <p><strong>Tagline:</strong> {foundBeer.tagline}</p>
        <p><strong>First Brew:</strong> {foundBeer.first_brewed}</p>
        <p><strong>Attenuation level: </strong> {foundBeer.attenuation_level}</p>
        <p><strong>Description:</strong> {foundBeer.description}</p>
        <p><strong>Countributed by: </strong>{foundBeer.contributed_by}</p>
      </div>
    </div>
  );
}

export default RandomBeersPage;
