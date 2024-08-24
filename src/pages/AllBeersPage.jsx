import { useState, useEffect } from "react";
import axios from "axios";
import { Spin } from "antd";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => setBeers(response.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value;
    const searchUrl = new URL(
      `https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`
    ).href;
    axios
      .get(searchUrl)
      .then((response) => setBeers(response.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="AllBeersPage">
      <input
        name="search"
        type="text"
        placeholder="Search"
        onChange={handleSearch}
      />
      {!beers.length ? (
        <Spin />
      ) : (
        beers.map((beer) => (
          <Link key={beer._id} to={`/beers/${beer._id}`}>
            <div className="beerContainer">
              <div>
                <img src={beer.image_url} />
              </div>
              <div>
                <h2>{beer.name}</h2>
                <p>{beer.tagline}</p>
                <p>Created by: {beer.contributed_by}</p>
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}

export default AllBeersPage;
