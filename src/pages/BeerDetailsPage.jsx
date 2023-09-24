import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'
import { Spinner, Card } from "react-bootstrap"


const BeerDetailsPage = () => {

    const { beerId } = useParams()

    const [beerDetails, setBeerDetails] = useState(null)

    useEffect(() => {
        loadBeerDetails()
    }, [])

    const loadBeerDetails = () => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then(({ data }) => setBeerDetails(data))
            .catch(err => console.log(err))

    }
    if (beerDetails === null) {
        return (<div>

            < Spinner animation="grow" />
        </div>
        );
    }

    return (

        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={beerDetails.image_url} />
                <Card.Body>
                    <Card.Title>{beerDetails.name}</Card.Title>
                    <p><strong>Tagline:</strong> {beerDetails.tagline}</p>
                    <p><strong>First brewed:</strong> {beerDetails.first_brewed}</p>
                    <p><strong>Attenuation level </strong>:{beerDetails.attenuation_level}</p>
                    <p><strong>Description:</strong> {beerDetails.description}</p>
                    <p><strong>Contributed_by:</strong> {beerDetails.contributed_by}</p>
                </Card.Body>
            </Card>
        </div>

    )


}

export default BeerDetailsPage;
