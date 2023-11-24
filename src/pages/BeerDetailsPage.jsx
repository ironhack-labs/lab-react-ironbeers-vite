import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


import beersService from "../services/beers.services";

const BeerDetailsPage = () => {

    const { beerId } = useParams()

    const [beer, setBeers] = useState({})

    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {

        beersService
            .getDetailsBeer(beerId)
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

export default BeerDetailsPage;
