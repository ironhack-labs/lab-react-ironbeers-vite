import { Card, Button } from "react-bootstrap";
import Beers from './../assets/beers.png'
import NewBeer from './../assets/new-beer.png'
import RandomBeer from './../assets/random-beer.png'
import { Link } from 'react-router-dom'


const HomePage = () => {

    return (
        <div className="HomePage">
            <Link to={'/beers'}>
                <Card className="card">
                    <Card.Img variant="top" src={Beers} />
                    <Card.Body>
                        <Card.Title>All Beers</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, a dolorum.
                            Iusto ut non temporibus neque omnis doloremque, cumque corrupti assumenda repellat quidem ad dolores tenetur,
                            ipsa voluptatibus atque repellendus!
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
            <Link to={'/randon-beer'}>
                <Card>
                    <Card.Img variant="top" src={NewBeer} />
                    <Card.Body>
                        <Card.Title>Random Beer</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, a dolorum.
                            Iusto ut non temporibus neque omnis doloremque, cumque corrupti assumenda repellat quidem ad dolores tenetur,
                            ipsa voluptatibus atque repellendus!
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
            <Link to={'/new-beer'}>
                <Card>
                    <Card.Img variant="top" src={RandomBeer} />
                    <Card.Body>
                        <Card.Title>New Beer</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, a dolorum.
                            Iusto ut non temporibus neque omnis doloremque, cumque corrupti assumenda repellat quidem ad dolores tenetur,
                            ipsa voluptatibus atque repellendus!
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    )
}

export default HomePage;
