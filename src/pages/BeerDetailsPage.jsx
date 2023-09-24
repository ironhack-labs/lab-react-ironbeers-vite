import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function BeerDetailsPage() {
  const [foundBeer, setFoundBeer] = useState(null);
  const { beerId } = useParams();
  // Fetching
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        setFoundBeer(response.data);
        setFetching(false);
      });
  }, [beerId]);

  return (
    <div className="container mt-5 d-flex justify-content-center p-5">
      <div className="col-6">
        {fetching && <p>Loading...</p>}
        {foundBeer && (
          <div className="row d-flex justify-content-center">
            <div className="col d-flex justify-content-center align-items-center">
              <img src={foundBeer.image_url} width={100} />
            </div>
            <div className="col">
              <h5>{foundBeer.name}</h5>
              <p>{foundBeer.tagline}</p>
              <p>{foundBeer.first_brewed}</p>
              <p>{foundBeer.attenuation_level}</p>
              <p>{foundBeer.description}</p>
              <p>{foundBeer.contributed_by}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BeerDetailsPage;
