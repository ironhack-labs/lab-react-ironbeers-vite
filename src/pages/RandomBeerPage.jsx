import axios from "axios"
import { useEffect, useState } from "react"
import { Card } from "react-bootstrap"


const RandomBeersPage = () => {

    const [randomBeerDetails, setRandomBeerDetails] = useState()

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then(response => {
                const randomBeerDetails = response.data
                setRandomBeerDetails(randomBeerDetails)
                console.log(randomBeerDetails)
            })
    }, [])

    if (!randomBeerDetails) {
        return <p>Loading...</p>
    }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={randomBeerDetails.image_url} />
            <Card.Body>
                <Card.Title>{randomBeerDetails.name}</Card.Title>
                <p>{randomBeerDetails.tagline}</p>
                <p>{randomBeerDetails.first_brewed}</p>
                <p>{randomBeerDetails.attenuation_level}</p>
                <Card.Text>{randomBeerDetails.description}</Card.Text>
                <p>{randomBeerDetails.contributed_by}</p>
            </Card.Body>
        </Card>
    )
}

export default RandomBeersPage;
