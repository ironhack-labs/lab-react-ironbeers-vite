import axios from "axios";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";


function AddBeerPage() {


    const [newBeerData, setNewBeerData] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: '',
    })

    const handleInputChange = e => {
        const { name, value } = e.currentTarget
        setNewBeerData({ ...newBeerData, [name]: value })
    }
    const handleBeerSubmit = e => {
        e.preventDefault()
        axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`, newBeerData)
            .then(() => res.Status(200))
            .catch(err => console.log(err))
    }



    return (
        <div className="newBeer">
            <Form onSubmit={handleBeerSubmit}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" value={newBeerData.name} onChange={handleInputChange}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Tag line</Form.Label>
                    <Form.Control type="text" name="tagline" value={newBeerData.tagline} onChange={handleInputChange}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" name="description" value={newBeerData.description} onChange={handleInputChange}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>First Brewed</Form.Label>
                    <Form.Control type="text" name="first_brewed" value={newBeerData.first_brewed} onChange={handleInputChange}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Brewers Tips</Form.Label>
                    <Form.Control type="text" name="brewers_tips" value={newBeerData.brewers_tips} onChange={handleInputChange}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Attenuation Level</Form.Label>
                    <Form.Control type="number" name="attenuation_level" value={newBeerData.attenuation_level} onChange={handleInputChange}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Contributed By</Form.Label>
                    <Form.Control type="text" name="contributed_by" value={newBeerData.contributed_by} onChange={handleInputChange}></Form.Control>
                </Form.Group>
                <div>
                    <Button variant="dark" type="submit">Create</Button>
                </div>
            </Form>
        </div>

    )
}

export default AddBeerPage;
