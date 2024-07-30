import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './AllBeersPage.css';

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  const getBeers = async () => {
    try {
      const response = await fetch("https://ih-beers-api2.herokuapp.com/beers");
      const data = await response.json();
      console.log(data);
      setBeers(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getBeers();
  }, []);
  

  return (
    <div className="all-beers-page">
      <h1>All Beers</h1>
      <ul>
        {beers.map((beer) => {
          return (
            <li key={beer._id}>
              <img src={beer.image_url} alt={beer.name} />
              <div className="text-container">
                <h2>
                  <Link to={`/beers/${beer._id}`}>{beer.name}</Link>
                </h2>
                <h3 className="tagline">{beer.tagline}</h3>
                <p> <strong>Contributed by:</strong>  {beer.contributed_by}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AllBeersPage;