import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {

    return (

        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <Nav className="justify-content-center">
                    <Link to="/">
                        <img src="src/assets/home-icon.png" alt="" />
                    </Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigation;
