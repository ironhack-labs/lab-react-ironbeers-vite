import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      console.log("response.data", response.data);
      setBeers(response.data);
    });
  }, []);

  return (
    <div className="allBeers">
      <h1>All Beers</h1>
      {beers.map((beers) => (
        <div key={beers._id} className="beer-card">
          <Link to={`/beers/${beers._id}`}>
            {beers.name}
            <img src={beers.image_url} alt="beers-image" />
            <h3>{beers.tagline}</h3>
            <p>Created by: {beers.contributed_by}</p>
            <br />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default AllBeersPage;
