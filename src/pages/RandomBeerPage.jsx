import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function RandomBeersPage() {
  const [foundBeer, setFoundBeer] = useState(null);
  const { beerId } = useParams();
  // Fetching
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((response) => {
        setFoundBeer(response.data);
        setFetching(false);
      });
  }, [beerId]);

  return (
    <div className="container p-5">
      <div className="d-flex justify-content-center">
        {fetching && (
          <img src="https://media.giphy.com/media/L05HgB2h6qICDs5Sms/giphy.gif" />
        )}
      </div>
      <div className="mt-5 d-flex justify-content-center">
        <div className="col-6">
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
    </div>
  );
}

export default RandomBeersPage;
