import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'
import { Spinner, Card } from "react-bootstrap"


const RandomBeersPage = () => {
    const [randomBeer, setRandomBeer] = useState(null)

    useEffect(() => {
        loadRandomBeer()
    }, [])

    const loadRandomBeer = () => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then(({ data }) => setRandomBeer(data))
            .catch(err => console.log(err))

    }
    if (randomBeer === null) {
        return (<div>

            < Spinner animation="grow" />
        </div>
        );
    }

    return (

        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={randomBeer.image_url} />
                <Card.Body>
                    <Card.Title>{randomBeer.name}</Card.Title>
                    <p><strong>Tagline:</strong> {randomBeer.tagline}</p>
                    <p><strong>First brewed:</strong> {randomBeer.first_brewed}</p>
                    <p><strong>Attenuation level </strong>:{randomBeer.attenuation_level}</p>
                    <p><strong>Description:</strong> {randomBeer.description}</p>
                    <p><strong>Contributed_by:</strong> {randomBeer.contributed_by}</p>
                </Card.Body>
            </Card>
        </div>

    )

}

export default RandomBeersPage;
