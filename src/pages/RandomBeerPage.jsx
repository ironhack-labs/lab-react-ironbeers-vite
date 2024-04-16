import { useState, useEffect } from "react";
import axios from "axios";
import BeerCardDetail from '../components/BeerCardDetail';


function RandomBeersPage() {
    const [randomBeer, setRandomBeer] = useState(null);

    useEffect(() => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then((beer) => {
                setRandomBeer(beer.data);
            })
            .catch((error) => {
                console.error('Error fetching random beer:', error);
            });
    }, []);

    return (
        <div>
            <h1>Random Beer</h1>
            <BeerCardDetail {...randomBeer} />
        </div>
    );
}

export default RandomBeersPage;
