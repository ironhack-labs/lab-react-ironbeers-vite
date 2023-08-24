import { useState, useEffect } from "react";
import axios from "axios";


function RandomBeersPage() {

    const [beersRandom, setBeersRandom] = useState([])

    useEffect(() => {
        loadRandomBeer()
    }, [])

    const loadRandomBeer = () => {

        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then((beer) => {
                // console.log(beer.data)
                setBeersRandom(beer.data);
            })
            .catch(err => console.log(err))

    }

    return (
        <div>

            <img src={beersRandom.image_url} alt="" style={{ width: "100px" }} />
            <p>{beersRandom.name}</p>
            <p>{beersRandom.tagline}</p>
            <p>{beersRandom.first_brewed}</p>
            <p>{beersRandom.attenuation_level}</p>
            <p>{beersRandom.description}</p>
            <p>{beersRandom.contributed_by}</p>
            <hr />

        </div>

    )


}

export default RandomBeersPage;
