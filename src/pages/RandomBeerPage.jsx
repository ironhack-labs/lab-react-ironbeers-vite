import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers/random";

function RandomBeersPage() {
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((resp) => {
        setBeers(resp.data);
        console.log("BEER DATA ->: ", resp.data);
      })
      .catch((err) => {
        console.log("Error fetching data from API", err);
      });
  }, []);

  return (
    <div key={beers.id}>
      {beers && (
        <div className="beer-details-page">
          <img src={beers.image_url} />
          <h2>{beers.name}</h2>
          <h3>{beers.tagline}</h3>
          <p>First brewed: {beers.first_brewed}</p>
          <p>Attenuation: {beers.attenuation_level}</p>
          <p>{beers.description}</p>
          <h3>Contributed by: {beers.contributed_by}</h3>
        </div>
      )}
    </div>
  );
}

export default RandomBeersPage;
