import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddBeerPage from "./AddBeerPage";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((resp) => {
      setBeers(resp.data);
      console.log(resp.data);
    });
  }, []);


  return (
    <div
      className="container"
      style={{ maxHeight: "90vh", overflow: "scroll" }}
    >
      <h1 style={{ fontSize: "24px", margin: "20px" }}> All Beers</h1>
      {/* <AddBeerPage addBeer={addNewBeer}/> */}

      <ul className="beersList">
        {beers.map((beer) => (
          <Link to={`/beers/${beer._id}`} className="beer" key={beer._id}>
            <img className="beerImage" src={beer.image_url} alt={beer.name} />
            <h2>{beer.name}</h2>
            <h4>{beer.tagline}</h4>
            <p> Created by: {beer.contributed_by} </p>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default AllBeersPage;
