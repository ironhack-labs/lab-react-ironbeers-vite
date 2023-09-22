import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import { Container, Row, Col, Card} from "react-bootstrap"

function RandomBeersPage() {

        const {beerId} = useParams()
        const [beerData, setBeerData] = useState('')

        const detailsBeer = () => {
                axios
                .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
                .then(response => {
                        setBeerData(response.data)
                })
                .catch(err => console.log(err))
        }


        useEffect (() => {
                detailsBeer()
        }, [beerId])


    return (
        <Container>
            <h1 className="text-center mt-4">{beerData ? beerData.name : "Skoll!"}</h1>
            <hr />
            <Row className="justify-content-center">
                <Col md={12}>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col md={6}>
                                    <Card.Img
                                        variant="top"
                                        src={beerData.image_url}
                                        alt=""
                                        style={{ maxHeight: '300px', objectFit: 'contain' }}
                                    />
                                </Col>
                                <Col md={6}>
                                    <Card.Text>{beerData.tagline}</Card.Text>
                                    <Card.Text><strong>First Brewed:</strong> {beerData.first_brewed}</Card.Text>
                                    <Card.Text><strong>Attenuation Level: </strong>{beerData.attenuation_level}</Card.Text>
                                    <Card.Text>{beerData.description}</Card.Text>
                                    <Card.Text><strong>Contributed by: </strong>{beerData.contributed_by}</Card.Text>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default RandomBeersPage;