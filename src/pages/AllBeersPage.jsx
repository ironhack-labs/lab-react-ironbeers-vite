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
            <Link to={'/beers/65c32a85702d92000234704c'} className="beer">
              <img
                className="lazy"
                src={beer.image_url}
                height={240}
                width={160}
                alt="beer"
              />
              <div className="description">
                <h1>Buzz</h1>
                <p>A Real Bitter Experience.</p>
                <span>
                  <strong>Created by:</strong> Buzz
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
