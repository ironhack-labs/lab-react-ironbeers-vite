import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';
import { Spinner, Card, ListGroup, Row, Col } from 'react-bootstrap'
import './AllBeersPage.css'
import { Link } from 'react-router-dom'

const AllBeersPage = () => {
    const [beers, setBeers] = useState(null)

    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(({ data }) => setBeers(data))
            .catch(err => console.log(err))
    }

    if (beers === null) {
        return (
            <Spinner animation="grow" />
        );
    }

    return (
        <Row>
            {
                beers.map(elm => {

                    return (
                        <Col key={elm._id}>
                            <Link to={`/beers/${elm._id}`}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={elm.image_url} />
                                    <Card.Body>
                                        <Card.Title>{elm.name}</Card.Title>
                                        <Card.Text>
                                            {elm.tagline}
                                        </Card.Text>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item>{elm.contributed_by}</ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </Link>
                        </Col>
                    )

                })
            }
        </Row >

    )
}

export default AllBeersPage;
