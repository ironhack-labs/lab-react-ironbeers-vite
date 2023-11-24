import { useState } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"

import beersService from './../services/beers.services'
import { Link } from "react-router-dom"

function AddBeerPage() {

    const [beer, setBeer] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: '',
        contributed_by: ''
    })

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setBeer({ ...beer, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()

        beersService
            .postNewBeer(beer)
            .then(() => <Link to={'/beers'} />)
            .catch(error => console.log(error))
    }

    return (

        <div className="beerForm">

            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={beer.name} name="name" onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="tagline">
                    <Form.Label>Tagline</Form.Label>
                    <Form.Control type="text" value={beer.tagline} name="tagline" onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" value={beer.description} name="description" onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="first_brewed">
                    <Form.Label>First Brewed</Form.Label>
                    <Form.Control type="text" value={beer.first_brewed} name="first_brewed" onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="brewers_tips">
                    <Form.Label>Brewer's Tips</Form.Label>
                    <Form.Control type="text" value={beer.brewers_tips} name="brewers_tips" onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="attenuation_level">
                    <Form.Label>Attenuation Level</Form.Label>
                    <Form.Control type="number" value={beer.attenuation_level} name="attenuation_level" onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="contributed_by">
                    <Form.Label>Contributed By</Form.Label>
                    <Form.Control type="text" value={beer.contributed_by} name="contributed_by" onChange={handleInputChange} />
                </Form.Group>

                <div className="d-grid">
                    <Button variant="dark" type="submit">Add Beer</Button>
                </div>

            </Form>

        </div>

    )


}

export default AddBeerPage;
