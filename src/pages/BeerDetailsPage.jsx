import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {

    const { beerId } = useParams()

    const [beerDetails, setBeerDetails] = useState()

    useEffect(() => {
        findBeerDetails()
    }, [])


    const findBeerDetails = () => {
        return axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then(({ data }) => setBeerDetails(data))
            .catch(err => console.log(err))

    }
    return (
        beerDetails ?
            <Container className="mt-3">
                <Row>
                    <Col md={{ span: 3 }}>
                        <img src={beerDetails.image_url} style={{ height: '150px' }} alt="Beer pic" />
                    </Col>
                    <Col md={{ span: 9 }}>
                        <Row>
                            <Col md={{ span: 6 }}>
                                <h3>{beerDetails.name}</h3>
                            </Col>
                            <Col md={{ span: 6 }}>
                                <p>{beerDetails.attenuation_level}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={{ span: 6 }}>
                                <h5>{beerDetails.tagline}</h5>
                            </Col>
                            <Col md={{ span: 6 }}>
                                <p><strong>{beerDetails.first_brewed}</strong></p>
                            </Col>
                        </Row>

                        <p>{beerDetails.description}</p>
                        <p>{beerDetails.contributed_by}</p>



                    </Col>
                </Row >
            </Container >
            :
            <Container className="mt-3">
                <h2>Loading...</h2>
            </Container>
    )
}


export default BeerDetailsPage;
