import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import Beer from "../components/Beer"

const BeerDetailsPage = () => {
    const { beerId } = useParams()
    const [beer, setBeer] = useState()
    useEffect(() => {
        loadBeer()
    }, [])

    const loadBeer = () => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then(({ data }) => setBeer(data))
            .catch(err => console.log(err))
    }

    return (
        !beer
            ?
            <h2>Loading...</h2>
            :
            <div className="Beer">
                <Beer beer={beer} />

            </div>
    )
}

export default BeerDetailsPage
