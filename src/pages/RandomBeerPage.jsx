import { useEffect } from "react"
import { useState } from "react"
import beersService from "../services/beers.service"

const RandomBeerPage = () => {

    const [beer, setBeer] = useState(null)

    useEffect(() => {
        loadBeer()

    }, [])


    const loadBeer = () => {
        beersService
            .getRandomBeer()
            .then(({ data }) => setBeer(data))
            .catch(err => console.log(err))

    }

    if (!beer) {
        return (<h1>Loading...</h1>)
    } else {

        return (
            <>
                <img src={beer.image_url} />
                <p>{beer.name}</p>
                <p>{beer.tagline}</p>
                <p>{beer.first_brewed}</p>
                <p>{beer.attenuation_level}</p>
                <p>{beer.description}</p>
                <p>{beer.contributed_by}</p>
            </>

        )
    }
}

export default RandomBeerPage
