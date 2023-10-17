import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Card, Col, Row } from "react-bootstrap";


function AllBeersPage() {

    const [beers, setBeers] = useState([])

    useEffect(() => {
        loadBeers()
    }, [])


    const loadBeers = () => {

        axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
            .then((beers) => {
                // console.log(beers.data)
                setBeers(beers.data)
            })
            .catch(err => console.log(err))

    }


    return (

        beers.map((beer) => {

            return (

                <Col md={4}>
                    <Card style={{ width: '18rem' }}>
                        <Link to={`/beers/${beer._id}`}>
                            <Card.Img variant="top" src={beer.image_url} style={{ width: "100px" }} />
                            <Card.Body>
                                {/* <img src=alt=""  /> */}
                                <p>{beer.name}</p>
                                <p>{beer.tagline}</p>
                                <p>{beer.contributed_by}</p>
                                <hr />
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>

            )
        })


    )



}

export default AllBeersPage;


// return (
//     <Card style={{ width: '18rem' }}>
//         <Card.Img variant="top" src="holder.js/100px180" />
//         <Card.Body>
//             <Card.Title>Card Title</Card.Title>
//             <Card.Text>
//                 Some quick example text to build on the card title and make up the
//                 bulk of the card's content.
//             </Card.Text>
//             <Button variant="primary">Go somewhere</Button>
//         </Card.Body>
//     </Card>
// );
// }