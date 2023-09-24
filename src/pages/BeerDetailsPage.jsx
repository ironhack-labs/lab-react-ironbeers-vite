import axios from "axios"
import { useEffect, useState } from "react"
import { Card } from "react-bootstrap"
import { useParams } from "react-router-dom"

const BeerDetailsPage = () => {

    const { beerId } = useParams()
    const [beerDetails, setBeerDetails] = useState()

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then(response => {
                const beerDetails = response.data
                setBeerDetails(beerDetails)
                console.log(beerDetails)
            })
    }, [])

    if (!beerDetails) {
        return <p>Loading...</p>
    }

    return (
        <div className="BeerDetailsPage">

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={beerDetails.image_url} />
                <Card.Body>
                    <Card.Title>{beerDetails.name}</Card.Title>
                    <p>{beerDetails.tagline}</p>
                    <p>{beerDetails.first_brewed}</p>
                    <p>{beerDetails.attenuation_level}</p>
                    <Card.Text>{beerDetails.description}</Card.Text>
                    <p>{beerDetails.contributed_by}</p>
                </Card.Body>
            </Card>
        </div>
    )

}

export default BeerDetailsPage
