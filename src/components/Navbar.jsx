import { Navbar, Nav, Container } from 'react-bootstrap'
import homeIcon from './../assets/home-icon.png'
import { Link } from 'react-router-dom'

const Navigation = () => {

    return (
        <>
            <Navbar className="Navbar">
                <Container>
                    <Nav className="me-auto">
                        <Link to={'/'} className='nav-link justify-content-center'>
                            <img
                                src={homeIcon}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt="Home Icon logo"
                            />
                        </Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation
