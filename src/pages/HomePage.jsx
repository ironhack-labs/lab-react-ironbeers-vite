import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


function HomePage() {

    return (
        <div className="beersHomePage">
            <Container className="mt-3">
                <Row className="justify-content-center text-center">
                    <Col md={{ span: 12 }}>
                        <img src="./src/assets/beers.png" alt="" />
                    </Col>
                    <Col md={{ span: 12 }}>
                        <Link to={'/beers'} ><h2 className="btn btn-dark mt-2">All Beers</h2></Link>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt corporis velit rem animi enim dolor vitae veniam perferendis nulla molestiae corrupti quos provident quisquam natus sed ipsam autem, odit saepe?</p>
                    </Col>
                </Row>
                <Row className="justify-content-center text-center">
                    <Col md={{ span: 12 }}>
                        <img src="./src/assets/random-beer.png" alt="" />
                    </Col>
                    <Col md={{ span: 12 }}>
                        <Link to={'/random-beer'} ><h2 className="btn btn-dark mt-2">Random Beer</h2></Link>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt corporis velit rem animi enim dolor vitae veniam perferendis nulla molestiae corrupti quos provident quisquam natus sed ipsam autem, odit saepe?</p>
                    </Col>
                </Row>
                <Row className="justify-content-center text-center">
                    <Col md={{ span: 12 }}>
                        <img src="./src/assets/new-beer.png" alt="" />
                    </Col>
                    <Col md={{ span: 12 }}>
                        <Link to={'/new-beer'} ><h2 className="btn btn-dark mt-2">New Beer</h2></Link>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt corporis velit rem animi enim dolor vitae veniam perferendis nulla molestiae corrupti quos provident quisquam natus sed ipsam autem, odit saepe?</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default HomePage;
