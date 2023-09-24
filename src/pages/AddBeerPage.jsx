import { useState } from "react"
import { Form, Button, Container } from "react-bootstrap"
import beersService from "../services/beers.service"

const AddBeerPage = () => {


    const [beerData, setBeerData] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: ''

    })

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setBeerData({ ...beerData, [name]: value })

    }

    const handleBeerSubmit = e => {

        e.preventDefault()

        beersService
            .createBeer(beerData)
            .then(response => console.log(response.status))
            .catch(err => console.log(err))

    }


    return (

        <div className="AddBeerPage">
            <Container>
                <Form onSubmit={handleBeerSubmit}>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" value={beerData.name} onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Tagline</Form.Label>
                        <Form.Control type="text" name="tagline" value={beerData.tagline} onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" type="text" name="description" value={beerData.description} onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>First Brewed</Form.Label>
                        <Form.Control type="text" name="first_brewed" value={beerData.first_brewed} onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Brewer's Tips</Form.Label>
                        <Form.Control type="text" name="brewers_tips" value={beerData.brewers_tips} onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Attenuation Level</Form.Label>
                        <Form.Control type="number" name="attenuation_level" value={beerData.attenuation_level} onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Contributed By</Form.Label>
                        <Form.Control type="text" name="contributed_by" value={beerData.contributed_by} onChange={handleInputChange} />
                    </Form.Group>
                    <div className="d-grid mt-3">
                        <Button variant="dark" type="submit">Add Beer</Button>
                    </div>
                </Form>
            </Container>

        </div>



    )
}

export default AddBeerPage
