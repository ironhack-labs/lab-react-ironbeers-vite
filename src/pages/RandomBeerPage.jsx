import { useState, useEffect } from "react";
import axios from "axios";

function RandomBeerPage() {
  const [beer, setBeer] = useState({});

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => setBeer(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="RandomBeerPage">
      <div>
        <img src={beer.image_url} />
      </div>
      <div className="beerInfo">
        <div className="beerInfo__firstLine">
          <h2>{beer.name}</h2>
          <h3>{beer.attenuation_level}</h3>
        </div>
        <div className="beerInfo__secondLine">
          <p>{beer.tagline}</p>
          <p>
            <strong>{beer.first_brewed}</strong>
          </p>
        </div>
        <div className="beerInfo__thirdLine">
          <p>{beer.brewers_tips}</p>
        </div>
        <div className="beerInfo__lastLine">
          <p>Created by: {beer.contributed_by}</p>
        </div>
      </div>
    </div>
  );
}

export default RandomBeerPage;
