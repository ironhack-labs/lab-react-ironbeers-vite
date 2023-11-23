import axios from "axios";
import { useEffect, useState } from "react";
import './BeerDetailsPage.css'
import { Container } from "react-bootstrap";

function RandomBeersPage() {

    const [beer, setBeer] = useState({})

    useEffect(() => getOneBeer(), [])

    function getOneBeer() {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then(({ data }) => setBeer(data))
            .catch(err => Next(err))
    }

    return (
        <div className="BeerDetailsPage">
            <Container>
                <img src={beer.image_url} alt={beer.name} />
                <div className="d-flex justify-content-around">
                    <h1>{beer.name}</h1>
                    <h3 className="disabled">{beer.attenuation_level}</h3>
                </div>
                <div className="d-flex justify-content-around">
                    <h6 className="disabled">{beer.tagline}</h6>
                    <p>{beer.first_brewed}</p>
                </div>
                <p>{beer.description}</p>
                <p>{beer.contributed_by}</p>


            </Container >
        </div>
    )
}

export default RandomBeersPage;
