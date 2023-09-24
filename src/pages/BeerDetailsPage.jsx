import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import beersService from "../services/beers.service"

const BeerDetailsPage = () => {

    const { beerId } = useParams()

    const [beer, setBeer] = useState(null)

    useEffect(() => {
        loadBeer()

    }, [])


    const loadBeer = () => {
        beersService
            .getOneBeer(beerId)
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

export default BeerDetailsPage
