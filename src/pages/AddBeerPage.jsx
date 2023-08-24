import { useState } from "react"
import { Form, Button, Container } from "react-bootstrap"
import beersService from './../services/beers.services'

const AddBeerPage = () => {

    const [beer, setBeer] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: ''
    })

    const handleInputChange = event => {
        const { value, name } = event.currentTarget
        setBeer({ ...beer, [name]: value })
    }

    const handleBeerSubmit = event => {

        event.preventDefault()

        beersService
            .addBeer(beer)
            .then(() => {
                console.log('All goooooood')
            })
            .catch(err => console.log(err))
    }

    const { name, tagline, first_brewed, brewers_tips, attenuation_level, description, contributed_by } = beer

    return (
        <div className="AddBeerPage">
            <Container>
                <Form onSubmit={handleBeerSubmit}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={name} name="name" onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="tagline">
                        <Form.Label>Tagline</Form.Label>
                        <Form.Control type="text" value={tagline} name="tagline" onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="first_brewed">
                        <Form.Label>First Brewed</Form.Label>
                        <Form.Control type="text" value={first_brewed} name="first_brewed" onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="brewers_tips">
                        <Form.Label>Brewers Tips</Form.Label>
                        <Form.Control type="text" value={brewers_tips} name="brewers_tips" onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="attenuation_level">
                        <Form.Label>Attenuation Level</Form.Label>
                        <Form.Control type="text" value={attenuation_level} name="attenuation_level" onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" value={description} name="description" onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="contributed_by">
                        <Form.Label>Contributed By</Form.Label>
                        <Form.Control type="text" value={contributed_by} name="contributed_by" onChange={handleInputChange} />
                    </Form.Group>

                    <div className="d-grid">
                        <Button variant="dark" type="submit">Add Beer</Button>
                    </div>
                </Form>
            </Container>
        </div>
    )
}

export default AddBeerPage
