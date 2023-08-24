import axios from "axios";
import { useState } from "react";
import { Form, Button } from "react-bootstrap"


const AddBeerPage = () => {

    const [beerData, setBeerData] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: '0',
        contributed_by: ''

    })

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setBeerData({ ...beerData, [name]: value })
    }

    const handleBeerSubmit = e => {

        e.preventDefault()

        axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`, beerData)
            .then(() => {
                console.log("kjahsdhjdkjhsadaskjhdasd")
            })
            .catch(err => console.log(err))
    }

    return (

        <div className="AddBeerPage">

            <Form onSubmit={handleBeerSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={beerData.name} name="name" onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Tagline</Form.Label>
                    <Form.Control type="text" value={beerData.tagline} name="tagline" onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" value={beerData.description} name="description" onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Brewed</Form.Label>
                    <Form.Control type="text" value={beerData.first_brewed} name="first_brewed" onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Brewer's Tips</Form.Label>
                    <Form.Control type="text" value={beerData.brewers_tips} name="brewers_tips" onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Attenuation Level</Form.Label>
                    <Form.Control type="number" value={beerData.attenuation_level} name="attenuation_level" onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Contributed By</Form.Label>
                    <Form.Control type="text" value={beerData.contributed_by} name="contributed_by" onChange={handleInputChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add New
                </Button>
            </Form>
        </div>
    )
}

export default AddBeerPage;
