import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap"
import axios from "axios";

function AddBeerPage() {

    const [beerData, setBeerData] = useState({

        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: '',
    })

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setBeerData({ ...beerData, [name]: value })
    }

    const handleBeerSubmit = e => {
        e.preventDefault()
        console.log(beerData)

        axios
            .post('https://ih-beers-api2.herokuapp.com/beers/new', beerData)
            .then(response => {
                console.log('Succes!')
            })
            .catch(err => console.log(err))

    }

    return (

        <div className="NewBeerForm">

            <Form onSubmit={handleBeerSubmit}>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={beerData.name} name="name" onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="tagline">
                    <Form.Label>Tagline</Form.Label>
                    <Form.Control type="text" value={beerData.tagline} name="tagline" onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" value={beerData.description} name="description" onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="first_brewed">
                    <Form.Label>First Brewed</Form.Label>
                    <Form.Control type="text" value={beerData.first_brewed} name="first_brewed" onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="brewers_tips">
                    <Form.Label>Brewers Tips</Form.Label>
                    <Form.Control type="text" value={beerData.brewers_tips} name="brewers_tips" onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="attenuation_level">
                    <Form.Label>Atenuation Level</Form.Label>
                    <Form.Control type="number" value={beerData.attenuation_level} name="attenuation_level" onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="contributed_by">
                    <Form.Label>Contributed By</Form.Label>
                    <Form.Control type="text" value={beerData.contributed_by} name="contributed_by" onChange={handleInputChange} />
                </Form.Group>

                <div className="d-grid">
                    <Button variant="dark" type="submit">Add Beer</Button>
                </div>

            </Form>

        </div>

    )

}

export default AddBeerPage;



