import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import axios from 'axios'




const AddBeerPage = () => {

    const [newBeer, setNewBeer] = useState({
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: ""
    })

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setNewBeer({ ...newBeer, [name]: value })
    }

    const handleBeerSubmit = e => {

        e.preventDefault()

        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
            .then(() => console.log("SUCCESS!!"))
            .catch(err => console.log(err))


    }
    return (

        <Form onSubmit={handleBeerSubmit}>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={newBeer.title} name="name" onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Tagline</Form.Label>
                <Form.Control type="text" value={newBeer.title} name="tagline" onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" value={newBeer.title} name="description" onChange={handleInputChange} />
            </Form.Group>



            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>First Brewed</Form.Label>
                        <Form.Control type="text" value={newBeer.title} name="first_brewed" onChange={handleInputChange} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Brewer's Tips</Form.Label>
                        <Form.Control type="text" value={newBeer.title} name="brewers_tips" onChange={handleInputChange} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Attenuation Level</Form.Label>
                        <Form.Control type="number" value={newBeer.title} name="attenuation_level" onChange={handleInputChange} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contributed By</Form.Label>
                        <Form.Control type="text" value={newBeer.title} name="contributed_by" onChange={handleInputChange} />
                    </Form.Group>
                </Col>
            </Row>
            <Button variant="dark" type="submit">
                Add Beer
            </Button>
        </Form >
    )

}

export default AddBeerPage;
