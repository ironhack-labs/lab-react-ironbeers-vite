import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BeerDetails from '../components/BeerDetails';
import './BeerDetailsPage.css';

function BeerDetailsPage() {
  const { beerId } = useParams();
  const [oneBeer, setOneBeer] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((singleBeer) => {
        console.log(singleBeer);
        setOneBeer(singleBeer.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (oneBeer === null) {
    return (
      <div id="AllBeers" className="fullpage">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  return (
    <div id="BeerDetails">
      <BeerDetails beer={oneBeer} />
    </div>
  );
}

export default BeerDetailsPage;
