import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AllBeersPage.css";
import { useSearchParams } from "react-router-dom";

function AllBeersPage() {
  const [beers, setBeers] = useState(null); // null or [] ?
  const [searchParams, setSearchParams] = useSearchParams();
  
 // const beerName = searchParams.get('q') // ""
  //console.log(beerName, 'here the beerName')
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q'))
  console.log("react render")
  

  useEffect(() => {
    const url = searchQuery ? `https://ih-beers-api2.herokuapp.com/beers/search?q=${searchQuery}` : 
    "https://ih-beers-api2.herokuapp.com/beers";

    axios
      .get(url)
      .then((beersFromApi) => {
        console.log(beersFromApi, "beers from API");
        setBeers(beersFromApi.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchParams, setSearchParams, searchQuery]);

  function handleSearch(e) {
    console.log(e)
    //setSearchParams({q: e.target.value})
    setSearchQuery(e.target.value)

  
  }

  if (beers === null) {
    return (
      <div id="AllBeers" className="fullpage">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  return (
    <div id="AllBeers" className="fullpage">
      <input type="text" onChange={handleSearch}></input>
      {beers.map((beer, index) => {
        return (
          <div key={index} className="beer-row">
            <Link to={`/beers/${beer._id}`} className="beer">
              <img className="lazy" src={beer.image_url} height={240} width={160} alt="beer" />
              <div className="description">
                <h1>{beer.name}</h1>
                <p>{beer.tagline}</p>
                <span>
                  <strong>Created by: {beer.contributed_by}</strong>
                  {beer.name}
                </span>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default AllBeersPage;
