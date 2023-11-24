import { useEffect, useState } from "react";


import beersService from "../services/beers.services";

function RandomBeersPage() {

    const [beer, setBeers] = useState({})

    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {

        beersService
            .getRandomMovie()
            .then(({ data }) => setBeers(data))
            .catch(error => console.log(error))
    }

    return (
        <div>
            <h1>{beer.name}</h1>
            <img src={beer.image_url} alt={beer.name} />
            <p>{beer.tagline}</p>
            <p>{beer.first_brewed}</p>
            <p>{beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
        </div>
    )
}




export default RandomBeersPage;
