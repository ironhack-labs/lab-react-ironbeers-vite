import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import beersService from './../services/beers.services'
import { Row, Col, Container } from 'react-bootstrap'

const BeerDetailsPage = () => {

    const { beerId } = useParams()
    const [beer, setBeer] = useState({})

    useEffect(() => {
        loadBeerDetails()
    }, [])

    const loadBeerDetails = () => {
        beersService
            .getBeerDetails(beerId)
            .then(({ data }) => setBeer(data))
            .catch(err => console.log(err))
    }

    const { image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by } = beer

    return (
        <div className="BeerDetailsPage">
            <Container>
                <Row>
                    <Col>
                        <img src={image_url} alt={name} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>{name}</h1>
                    </Col>
                    <Col>
                        <h2>{attenuation_level}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>{tagline}</h3>
                    </Col>
                    <Col>
                        <h4>{first_brewed}</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>{description}</p>
                        <h5>{contributed_by}</h5>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BeerDetailsPage
