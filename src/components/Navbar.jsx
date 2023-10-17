
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {

    return (
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <Nav className="justify-content-center">

                    <Link to={"/"} className="navLink">
                        <img src="src/assets/home-icon.png" alt="" />
                    </Link>
                </Nav>
            </Container>
        </Navbar>

    )

}

export default Navigation;

