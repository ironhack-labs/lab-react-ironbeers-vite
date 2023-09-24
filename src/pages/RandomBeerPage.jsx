import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";


function RandomBeersPage() {

    const [randomBeer, setRandomBeer] = useState()

    useEffect(() => {
        findRandomBeer()
    }, [])

    const findRandomBeer = () => {
        return axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
            .then(({ data }) => setRandomBeer(data))
            .catch(err => console.log(err))
    }

    return (
        randomBeer ?
            <Container className="mt-3">
                <Row>
                    <Col md={{ span: 3 }}>
                        <img src={randomBeer.image_url} style={{ height: '150px' }} alt="Beer pic" />
                    </Col>
                    <Col md={{ span: 9 }}>
                        <Row>
                            <Col md={{ span: 6 }}>
                                <h3>{randomBeer.name}</h3>
                            </Col>
                            <Col md={{ span: 6 }}>
                                <p>{randomBeer.attenuation_level}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={{ span: 6 }}>
                                <h5>{randomBeer.tagline}</h5>
                            </Col>
                            <Col md={{ span: 6 }}>
                                <p><strong>{randomBeer.first_brewed}</strong></p>
                            </Col>
                        </Row>
                        <p>{randomBeer.description}</p>
                        <p>{randomBeer.contributed_by}</p>
                    </Col>
                </Row >
            </Container >
            :
            <Container className="mt-3">
                <h2>Loading...</h2>
            </Container>
    )
}

export default RandomBeersPage;
