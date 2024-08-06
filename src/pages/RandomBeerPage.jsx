import { useEffect, useState } from "react";
import axios from "axios";

function RandomBeerPage() {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => setBeer(response.data))
      .catch((error) => console.log(error));
  }, []);

  if (!beer) {
    return <div>Loading...</div>;
  }

  return (
    <div className="RandomBeerPage">
      <img src={beer.image_url} alt={beer.name} />
      <h2>{beer.name}</h2>
      <p>{beer.tagline}</p>
      <p><b>First Brewed:</b> {beer.first_brewed}</p>
      <p><b>Attenuation Level:</b> {beer.attenuation_level}</p>
      <p>{beer.description}</p>
      <p><b>Contributed by:</b> {beer.contributed_by}</p>
    </div>
  );
}

export default RandomBeerPage;
