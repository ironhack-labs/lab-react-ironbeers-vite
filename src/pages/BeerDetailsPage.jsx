import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function BeerDetailsPage() {
  const { beerId } = useParams();
  const [beer, setBeer] = useState({});

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => setBeer(response.data))
      .catch((err) => console.log(err));
  }, [beerId]);

  return (
    <div className="BeerDetailsPage">
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
          <p>{beer.description}</p>
        </div>
        <div className="beerInfo__lastLine">
          <p>Created by: {beer.contributed_by}</p>
        </div>
      </div>
    </div>
  );
}

export default BeerDetailsPage;
