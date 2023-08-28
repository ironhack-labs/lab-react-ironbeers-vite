import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);
  // Fetching
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      setBeers(response.data);
      setFetching(false);
    });
  }, []);

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center">
        {fetching && (
          <img src="https://media.giphy.com/media/L05HgB2h6qICDs5Sms/giphy.gif" />
        )}
      </div>
      <div className="row row-cols-3">
        {beers.map((beer) => {
          return (
            <div className="col mb-5">
              <div
                key={beer._id}
                className="d-flex col flex-column align-items-center"
              >
                <h4 className="text-dark">{beer.name}</h4>
                <Link className="row text-center" to={`/beers/${beer._id}`}>
                  <img src={beer.image_url} width={80} height={240}></img>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllBeersPage;
