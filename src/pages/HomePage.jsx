import React from 'react';

import { Link } from "react-router-dom";

import { Container, Col } from 'react-bootstrap';

function HomePage() {

return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Col md={4} className="text-center">
                <Link to="/beers" className="text-decoration-none">
                    <div className="mb-4">
                        <h3 className="mt-2">All Beers</h3>
                        <p>Look all our beers</p>
                    </div>
                </Link>
                <Link to="/random-beer" className="text-decoration-none">
                    <div className="mb-4">
                        <h3 className="mt-2">Random Beer</h3>
                        <p>Wanna pick a random beer?</p>
                    </div>
                </Link>
                <Link to="/new-beer" className="text-decoration-none">
                    <div className="mb-4">
                        <h3 className="mt-2">New Beer</h3>
                        <p>Add a new beer</p>
                    </div>
                </Link>
            </Col>
        </Container>
    );
}

export default HomePage;