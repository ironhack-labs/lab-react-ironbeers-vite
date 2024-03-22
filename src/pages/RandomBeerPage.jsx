import { useEffect, useState } from "react";
import axios from "axios";

function RandomBeersPage() {
  const BASE_URL = "https://ih-beers-api2.herokuapp.com/beers";

  const [beer, setBeer] = useState({});

  useEffect(() => {
    const getBeer = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/random`);
        console.log(res);
        setBeer(res.data);
      } catch (err) {
        console.log("Error fetching the beers:", error);
      }
    };
    getBeer();
  }, []);

  return (
    <div>
      <h1>{beer.name}</h1>
      <img src={beer.image_url} alt={beer.name} />
      <p>{beer.tagline}</p>
      <p>First Brewed: {beer.first_brewed}</p>
      <p>Attenuation Level: {beer.attenuation_level}</p>
      <p>Description: {beer.description}</p>
      <p>Contributed by: {beer.contributed_by}</p>
    </div>
  );
}

export default RandomBeersPage;
