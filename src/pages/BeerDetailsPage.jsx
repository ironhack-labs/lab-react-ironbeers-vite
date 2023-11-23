
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

const URL = "https://ih-beers-api2.herokuapp.com/beers"

const BeerDetailsPage = () => {

    const [selectedBeer, setSelectedBeer] = useState()
    const { beerId } = useParams()

    useEffect(() => {
        axios
            .get(`${URL}/${beerId}`)
            .then((response) => {
                setSelectedBeer(response.data)

            })
    }, [beerId])

    if (!selectedBeer) {
        return (<div> Loading... </div>)
    } else {

        return (
            <div className="cervecita">
                <div className="columni">
                    <img src={selectedBeer.image_url} alt={selectedBeer.name} />
                    <h2> {selectedBeer.name} </h2>
                </div>
                <div className="columni">
                    <p> {selectedBeer.tagline} </p>
                    <p> First brewed : {selectedBeer.first_brewed} </p>
                    <p> Attenuation level: {selectedBeer.attenuation_level} % </p>
                    <p> {selectedBeer.description}</p>
                    <p> Contributed by: {selectedBeer.contributed_by}</p>
                </div>
            </div>
        )
    }


}

export default BeerDetailsPage