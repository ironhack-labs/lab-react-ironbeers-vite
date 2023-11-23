import Random from "../assets/random-beer.png"
import axios from "axios";
import { useEffect, useState } from "react";


function RandomBeersPage() {


    const [randomBeer, setRandomBeer] = useState({})

    useEffect(() => {
        getRandomBeer()
    }, [])


    const getRandomBeer = () => {

        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then(response => setRandomBeer(response.data))
            .catch(err => console.log(err))

    }
    return (

        <div>
            <img style={{ width: '20%' }} src={randomBeer.image_url} />
            <p>{randomBeer.name}</p>
            <p>{randomBeer.tagline}</p>
            <p>{randomBeer.first_brewed}</p>
            <p>{randomBeer.attenuation_level}</p>
            <p>{randomBeer.description}</p>
            <p>{randomBeer.contributed_by}</p>

        </div>

    )
}

export default RandomBeersPage;
