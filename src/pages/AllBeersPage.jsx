import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './AllBeersPage.css';

function AllBeersPage() {
  const [beers, setBeers] = useState(null); // null or [] ?

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((beersFromApi) => {
        console.log(beersFromApi, 'beers from API');
        setBeers(beersFromApi.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (beers === null) {
    return (
      <div id="AllBeers" className="fullpage">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  return (
    <div id="AllBeers" className="fullpage">
      {beers.map((beer, index) => {
        return (
          <div key={index} className="beer-row">
            <Link to={`/beers/${beer._id}`} className="beer">
              <img
                className="lazy"
                src={beer.image_url}
                height={240}
                width={160}
                alt="beer"
              />
              <div className="description">
                <h1>{beer.name}</h1>
                <p>{beer.tagline}</p>
                <span>
                  <strong>Created by: {beer.contributed_by}</strong>{beer.name}
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
