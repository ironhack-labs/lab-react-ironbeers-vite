import axios from 'axios';
import { useEffect, useState } from 'react';
import BeerDetails from '../components/BeerDetails';

function RandomBeerPage() {
  const [randomBeer, setRandomBeer] = useState(null);

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((randomBeerFromApi) => {
        console.log(randomBeerFromApi, 'the random beer obj res from API');
        setRandomBeer(randomBeerFromApi.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (randomBeer === null) {
    return (
      <div id="RandomBeer" className="fullpage">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  return (
    <div id="BeerDetails">
      <BeerDetails beer={randomBeer} />
    </div>
  );
}

export default RandomBeerPage;
