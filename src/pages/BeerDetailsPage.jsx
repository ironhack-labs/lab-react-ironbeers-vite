import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function BeerDetailsPage() {
  const { beerId } = useParams();
  const [foundBeer, setFoundBeer] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((resp) => {
        setFoundBeer(resp.data).catch((error) => setError(error));
        console.log("Beer details", resp.data);
      });
  }, [beerId]);

    if (!foundBeer) {
      return <p>Loading...</p>;
    }

  return (
    <div>
      <h1>Beer Details</h1>
      <img src={foundBeer.image_url} alt={foundBeer.name} />
      <h2>{foundBeer.name}</h2>
      <p>
        <strong>Tagline:</strong> {foundBeer.tagline}
      </p>
      <p>
        <strong>First Brew:</strong> {foundBeer.first_brewed}
      </p>
      <p>
        <strong>Attenuation level: </strong> {foundBeer.attenuation_level}
      </p>
      <p>
        <strong>Description:</strong> {foundBeer.description}
      </p>
      <p>
        <strong>Countributed by: </strong>
        {foundBeer.contributed_by}
      </p>
    </div>
  );
}

export default BeerDetailsPage;
