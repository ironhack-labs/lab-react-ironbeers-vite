import { Row, Col } from "react-bootstrap"

const Beer = ({ beer }) => {
    return (
        <Row className="justify-content-md-center">
            <Col md={{ span: 3 }} className="text-center mt-3 border">
                <figure>
                    <img src={beer.image_url} alt={beer.name} />
                </figure>
                <h3>{beer.name} - <span style={{ color: 'gray' }}>{beer.attenuation_level}</span></h3>
                <h5 style={{ color: 'gray' }}>{beer.tagline} - <span style={{ color: 'black' }}>{beer.first_brewed}</span></h5>
                <p style={{ textAlign: 'left' }}>{beer.description}</p>
                <p style={{ textAlign: 'left', color: 'gray' }}>{beer.contributed_by}</p>
            </Col>
        </Row>
    )
}

export default Beer