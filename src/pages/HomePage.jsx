import beers from './../assets/beers.png'
import random from './../assets/random-beer.png'
import newBeer from './../assets/new-beer.png'
import Card from 'react-bootstrap/Card';

import './HomePage.css'
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';



function HomePage() {

    return (

        <div className="HomePage">
            <Container >
                <Row className='justify-content-center'>
                    <Col md="4">
                        <Card>
                            <Card.Img variant="top" src={beers} />
                            <Card.Body>
                                <Card.Title>All Beers</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis a libero sed aliquam. Duis feugiat commodo libero, sed aliquam eros pulvinar nec.
                                </Card.Text>
                                <div className="d-grid gap-2">
                                    <Link className="btn btn-dark" to={'/beers'} variant="dark">All Beers</Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="4">
                        <Card>
                            <Card.Img variant="top" src={random} />
                            <Card.Body>
                                <Card.Title>Random Beer</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis a libero sed aliquam. Duis feugiat commodo libero, sed aliquam eros pulvinar nec.
                                </Card.Text>
                                <div className="d-grid gap-2">
                                    <Link className="btn btn-dark" to={'/random-beer'} variant="dark">Random Beer</Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="4">
                        <Card>
                            <Card.Img variant="top" src={newBeer} />
                            <Card.Body>
                                <Card.Title>New Beer</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis a libero sed aliquam. Duis feugiat commodo libero, sed aliquam eros pulvinar nec.
                                </Card.Text>
                                <div className="d-grid gap-2">
                                    <Link className="btn btn-dark" to={'/new-beer'} variant="dark">New Beer</Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div >

    )
}

export default HomePage;
