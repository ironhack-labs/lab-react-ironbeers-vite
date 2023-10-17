import { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'

import beerService from '../services/beerService.service'

const AddBeerPage = () => {
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
		setBeerData({ ...beerData, [name]: value }) // computed property names
	}

	const handleFormSubmit = e => {
		e.preventDefault()

		beerService
			.createBeer(beerData)
			.then(() => {})
			.catch(err => console.log(err))
	}

	return (
		<Form onSubmit={handleFormSubmit}>
			<Form.Group className='mb-3' controlId='name'>
				<Form.Label>Name</Form.Label>
				<Form.Control
					type='text'
					value={beerData.name}
					name='name'
					onChange={handleInputChange}
				/>
			</Form.Group>

			<Form.Group className='mb-3' controlId='tagline'>
				<Form.Label>Tag Line</Form.Label>
				<Form.Control
					type='text'
					value={beerData.tagline}
					name='tagline'
					onChange={handleInputChange}
				/>
			</Form.Group>

			<Form.Group className='mb-3' controlId='description'>
				<Form.Label>Description</Form.Label>
				<Form.Control
					type='text'
					value={beerData.description}
					name='description'
					onChange={handleInputChange}
				/>
			</Form.Group>

			<Row>
				<Col>
					<Form.Group className='mb-3' controlId='first_brewed'>
						<Form.Label>First Brewed</Form.Label>
						<Form.Control
							type='text'
							value={beerData.first_brewed}
							name='first_brewed'
							onChange={handleInputChange}
						/>
					</Form.Group>
				</Col>
				<Col>
					<Form.Group className='mb-3' controlId='attenuation_level'>
						<Form.Label>Attenuation Level</Form.Label>
						<Form.Control
							type='number'
							value={beerData.attenuation_level}
							name='attenuation_level'
							onChange={handleInputChange}
						/>
					</Form.Group>
				</Col>
			</Row>
			<Form.Group className='mb-3' controlId='brewers_tips'>
				<Form.Label>Tips</Form.Label>
				<Form.Control
					type='text'
					value={beerData.brewers_tips}
					name='brewers_tips'
					onChange={handleInputChange}
				/>
			</Form.Group>

			<div className='d-grid'>
				<Button variant='dark' type='submit'>
					Create neew beer
				</Button>
			</div>
		</Form>
	)
}

export default AddBeerPage
