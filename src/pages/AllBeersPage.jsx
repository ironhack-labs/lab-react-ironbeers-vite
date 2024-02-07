import "./AllBeersPage.css";
import { useState, useEffect } from "react";
import axios from "axios";

function AllBeersPage() {
  const [beers, setBeers] = useState(null); // null or [] ?

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((beersFromApi) => {
        console.log(beersFromApi, "beers from API");
        setBeers(beersFromApi.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div id="AllBeers">
      <div className="beer">
        <img src="" height={240} width={160} alt="beer" />
        <div className="description">
          <h1>Buzz</h1>
          <p>A Real Bitter Experience.</p>
          <span>
            <strong>Created by:</strong> Buzz
          </span>
        </div>
      </div>
    </div>
  );
}

export default AllBeersPage;
