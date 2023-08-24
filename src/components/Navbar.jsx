import { Container, Navbar, Nav } from "react-bootstrap";
import homeIcon from "./../assets/home-icon.png"
import { Link } from "react-router-dom"

Container

const Navigation = () => {
    return (
        <div className="navigation">
            <Link to={'/'} >
                <Navbar bg="primary" data-bs-theme="dark">
                    <Container className="justify-content-center">

                        <Navbar.Brand  >
                            <img
                                src={homeIcon}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>

                    </Container>
                </Navbar >
            </Link>
        </div>
    )
}

export default Navigation;
