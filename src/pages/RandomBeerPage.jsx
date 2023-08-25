import { useEffect } from "react";
import { useState } from "react";
import axios, { Axios } from "axios";
import { useParams } from "react-router-dom"
import { Container } from "react-bootstrap";

function RandomBeersPage() {
    const [details, setDetails] = useState(null)

    const { beerId } = useParams()

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)

            .then(response => {

                setDetails(response.data)
            })
            .catch(error => {
                console.error('There was an error!', error);
            })
    }, [beerId])

    if (!details) {
        return (
            <p>Loading...</p>
        )
    }

    return (
        <Container className="d-flex">
            <img src={details.image_url} alt="beerimg" className="w-25 h-40" />
            <div className="d-flex align-items-start flex-column">
                <h3>{details.name}</h3>
                <p>{details.tagline}</p>
                <p>{details.first_brewed}</p>
                <p>{details.attenuation_level}</p>
                <p>{details.description}</p>
                <p>{details.contributed_by}</p>
            </div>


        </Container>
    )
}


export default RandomBeersPage;
