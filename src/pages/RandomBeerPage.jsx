import axios from "axios"
import { useEffect, useState } from "react"
import Beer from "../components/Beer"

const RandomBeersPage = () => {

    const [beer, setBeer] = useState()

    useEffect(() => {
        loadBeer()
    }, [])

    const loadBeer = () => {
        axios
            .get('https://ih-beers-api2.herokuapp.com/beers/random')
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

export default RandomBeersPage
