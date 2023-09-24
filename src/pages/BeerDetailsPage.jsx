import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {

    const { beerId } = useParams()
    const [beer, setBeer] = useState([])

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then(response => {
                const beerFromApi = response.data
                setBeer(beerFromApi)
            })
            .catch(err => console.log(err))
    }, [beerId])

    return (
        <div>
            <img src={beer.image_url} alt="{beer.name}" />
            <h1>{beer.name}</h1>
            <h3>{beer.tagline}</h3>
            <p><strong>{beer.first_brewed}</strong></p>
            <p>attenuation level: {beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
        </div>
    )
}

export default BeerDetailsPage;
