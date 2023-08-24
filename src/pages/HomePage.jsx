import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function HomePage() {

    return (
        <>

            <div className="HomePage mb-3">
                <Card>
                    <Card.Img variant="top" src="src/assets/beers.png" />
                    <Card.Body>
                        <Link to={"/beers"}>
                            <p>All Beers</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </Link>
                    </Card.Body>
                </Card>
            </div>

            <div className="HomePage mb-3">
                <Card>
                    <Card.Img variant="top" src="src/assets/random-beer.png" />
                    <Card.Body>
                        <Link to={"/random-beer"}>
                            <p>Random Beer</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </Link>
                    </Card.Body>
                </Card>
            </div>

            <div className="HomePage mb-3">
                <Card>
                    <Card.Img variant="top" src="src/assets/new-beer.png" />
                    <Card.Body>
                        <Link to={"/new-beer"}>
                            <p>New Beer</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </Link>
                    </Card.Body>
                </Card>
            </div>

        </>


    )

}

export default HomePage;
