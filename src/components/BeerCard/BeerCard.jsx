import { Card, Button, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
const BeerCard = ({ _id, name, image_url, tagline, contributed_by }) => {

    return (
        <Col md={{ span: 3 }} className="mb-3">
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {tagline}
                        <br />
                        {contributed_by}
                    </Card.Text>
                    <Link className="btn btn-secondary" to={`/beers/${_id}`}>See details</Link>
                </Card.Body>
            </Card>
        </Col >
    )
}

export default BeerCard