import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import axios from "axios"
import { Container, Row, Col, Card} from "react-bootstrap"

const apiUrl = "https://ih-beers-api2.herokuapp.com/beers"

function AllBeersPage() {

        const beersArray = []

        const [beers, setBeers] = useState(beersArray)


        const allBeers = () => {
                 axios
                   .get (apiUrl)
                   .then ((response) => {
                           setBeers(response.data)
                           console.log(response.data)
                   })
                    .catch(err => console.log(err))
        }


        useEffect (() => {
                allBeers()
        }, [])

        
   return (
        <Container>
            <h1 className="text-center my-4">What's our favorite drink? Beers!</h1>

            <Row className="justify-content-center">
                {beers.map((beer) => (
                    <Col key={beer._id} md={12} className="mb-12">
                        <Link to={`/beers/${beer._id}`} className="text-decoration-none">
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src={beer.image_url}
                                    alt={beer.name}
                                    style={{ maxHeight: '200px', objectFit: 'contain' }}
                                />
                                <Card.Body>
                                    <Card.Title>{beer.name}</Card.Title>
                                    <Card.Text>{beer.tagline}</Card.Text>
                                    <Card.Text>Contributed by: {beer.contributed_by}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default AllBeersPage;
