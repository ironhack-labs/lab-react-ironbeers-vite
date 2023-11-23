import axios from "axios";
import { useState } from "react"
import { Form, Button, Row, Col, Container } from "react-bootstrap"
import './AddBeerPage.css'
import { Link } from "react-router-dom";

function AddBeerPage() {

    const [newBeer, setNewBeer] = useState({
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: "",
        contributed_by: ""

    })

    function formHandler(e) {
        const { value, name } = e.currentTarget
        setNewBeer({ ...newBeer, [name]: value })
    }

    function formHandlerSubmit(e) {
        e.preventDefault()

        axios
            .post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
            .then(res => console.log(res))
            .catch(err => Next(err))
    }

    return (
        <div className="AddBeerPage">
            <Container>
                <Form onSubmit={formHandlerSubmit}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={newBeer.name} name="name" onChange={formHandler} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="tagline">
                        <Form.Label>Tagline</Form.Label>
                        <Form.Control type="text" value={newBeer.tagline} name="tagline" onChange={formHandler} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" value={newBeer.description} name="description" onChange={formHandler} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="first_brewed">
                        <Form.Label>First Brewed</Form.Label>
                        <Form.Control type="text" value={newBeer.first_brewed} name="first_brewed" onChange={formHandler} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="brewers_tips">
                        <Form.Label>Brewer's Tips</Form.Label>
                        <Form.Control type="text" value={newBeer.brewers_tips} name="brewers_tips" onChange={formHandler} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="attenuation_level">
                        <Form.Label>Attenuation Level</Form.Label>
                        <Form.Control type="number" value={newBeer.attenuation_level} name="attenuation_level" onChange={formHandler} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="contributed_by">
                        <Form.Label>Contributed By</Form.Label>
                        <Form.Control type="text" value={newBeer.contributed_by} name="contributed_by" onChange={formHandler} />
                    </Form.Group>

                    <div className="d-grid">
                        <Button variant="dark" type="submit">Add Beer</Button>
                    </div>
                </Form>
            </Container>
        </div>
    )
}

export default AddBeerPage;
