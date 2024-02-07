import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './BeerDetailsPage.css';

function BeerDetailsPage() {
  const { beerId } = useParams();
  const [oneBeer, setOneBeer] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((singleBeer) => {
        console.log(singleBeer);
        setOneBeer(singleBeer);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [beerId]);

  return (
    <div id="BeerDetails">
      <div className="beer-details">
        <img src="beers.png" />
        <div>
          <div>
            <h1>Trashy Blonde</h1>
            <h1>76</h1>
          </div>
          <div>
            <span>You Know You Shouldnt</span>
            <span>
              <strong>04/2008</strong>
            </span>
          </div>
          <p>Lorem Ipsum</p>
          <span>Sam Mason &lt;samasonas&gt;</span>
        </div>
      </div>
    </div>
  );
}

export default BeerDetailsPage;
