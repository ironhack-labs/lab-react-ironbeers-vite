import axios from "axios";
import { useEffect, useState } from "react";
import './AllBeersPage.css'
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
function AllBeersPage() {

    const [beers, setBeers] = useState([])

    useEffect(() => { getBeers() }, [])

    function getBeers() {
        axios
            .get('https://ih-beers-api2.herokuapp.com/beers')
            .then(({ data }) => setBeers(data))
            .catch(err => next(err))

    }

    return (
        <div className="AllBeersPage">
            <Container>
                {beers.map(e => {
                    return (
                        <Row className="d-flex justify-content-center" key={e._id}>
                            <Col md="2">
                                <Link to={`/beers/${e._id}`}> <img className="mb-5" src={e.image_url} alt={e.name} /></Link>
                            </Col>
                            <Col md="6">
                                <div className="info">
                                    <h3>{e.name}</h3>
                                    <p>{e.description}</p>
                                </div>
                            </Col>
                            <hr />
                        </Row>
                    )
                })}
            </Container>
        </div>
    )
}

export default AllBeersPage;
