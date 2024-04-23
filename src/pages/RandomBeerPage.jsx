import axios from "axios";
import { useEffect, useState } from "react";

function RandomBeersPage() {

    const [ randomBeer, setRandomBeer ] = useState();

    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
            .then(response => setRandomBeer(response.data));
    }, []);

    if (!randomBeer) {
        return <p>Loading...</p>
    } else {
        return (
            <div className="card">
                <img src={randomBeer.image_url} className="card-img-top mt-3 ms-3" style={{width: "100px"}}/>
                <div className="card-body">
                    <h1 className="card-text">{randomBeer.name}</h1>
                    <p className="text-end">{randomBeer.attenuation_level}</p>
                    <p className="text-end"><b>{randomBeer.first_brewed}</b></p>
                    <h5>{randomBeer.tagline}</h5>
                    <p>{randomBeer.description}</p>
                    <small>{randomBeer.contributed_by}</small>
                </div>
            </div>
        );
    }
}

export default RandomBeersPage;