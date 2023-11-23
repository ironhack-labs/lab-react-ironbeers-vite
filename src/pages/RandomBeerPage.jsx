import { useState, useEffect } from "react"
import axios from "axios"



function RandomBeersPage() {

    const URL = "https://ih-beers-api2.herokuapp.com/beers/random"

    const [randomBeer, setRandomBeer] = useState([])

    useEffect(() => {
        axios
            .get(URL)
            .then((response) => {
                setRandomBeer(response.data)
            })
    }, [])



    return (


        < div className="cervecita" >
            <div className="columni">
                <img src={randomBeer.image_url} alt={randomBeer.name} />
                <h2> {randomBeer.name} </h2>
            </div>
            <div className="columni">
                <p> {randomBeer.tagline} </p>
                <p> First brewed : {randomBeer.first_brewed} </p>
                <p> Attenuation level: {randomBeer.attenuation_level} % </p>
                <p> {randomBeer.description}</p>
                <p> Contributed by: {randomBeer.contributed_by}</p>
            </div>
        </div >)
}

export default RandomBeersPage;
