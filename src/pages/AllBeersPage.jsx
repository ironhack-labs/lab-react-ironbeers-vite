import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => setBeers(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="AllBeersPage">
      {beers.map((beer) => (
        <div key={beer._id} className="beer-item">
          <img src={beer.image_url} alt={beer.name} />
          <div>
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            <p>
              <b>Contributed by: </b>
              {beer.contributed_by}
            </p>
            <Link to={`/beers/${beer._id}`} data-testid={`details-link-${beer._id}`}>Details</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllBeersPage;
