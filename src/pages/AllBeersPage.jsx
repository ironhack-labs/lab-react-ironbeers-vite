import * as beerApi from "../../api/beer";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [beerList, setBeerList] = useState([]);
  const imgStyle = {
    width: "10%",
  };
  const divStyle = {
    padding: "5px",
    display: "flex",
    alignItems: "center",
    gap: "20px",
    backgroundColor: "#cbbcbc",
    margin: "10px",
  };
  useEffect(() => {
    beerApi
      .getAll()
      .then((response) => {
        const { data } = response;
        setBeerList(data);
      })
      .catch((error) => console.error(error));
  }, []);

  function handleSearch(query) {
    beerApi
      .searchBeer(query)
      .then((response) => {
        const { data } = response;
        setBeerList(data);
      })
      .catch((error) => console.error(error));
  }

  return (
    <div>
      <Navbar />
      <div></div>
      <label htmlFor="beerSearch">Find a beer</label>
      <input
        type="search"
        id="search"
        name="search"
        placeholder="Search..."
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
      {beerList.map((beer) => {
        return (
          <Link
            key={beer._id}
            to={`/beers/${beer._id}`}
            style={{ color: "black" }}
          >
            <div style={divStyle}>
              <div>
                <img src={beer.image_url} alt="beer" style={imgStyle} />
              </div>
              <div>
                <h2 style={{ fontWeight: "100" }}>{beer.name}</h2>
                <p>{beer.tagline}</p>
                <p>
                  <strong>Created by:</strong> {beer.contributed_by}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default AllBeersPage;
