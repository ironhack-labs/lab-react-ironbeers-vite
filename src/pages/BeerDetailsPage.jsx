import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import beerService from '../services/beerService.service'
import { Row, Col } from 'react-bootstrap'

const BeerDetailsPage = () => {
	const { beerId } = useParams()

	const [beer, setBeer] = useState(null)

	useEffect(() => {
		beerService
			.getBeerDetails(beerId)
			.then(({ data }) => setBeer(data))
			.catch(err => console.log(err))
	}, [beerId])

	return !beer ? (
		<h1>...loading</h1>
	) : (
		<div className='BeerDetails'>
			<Row className='flex-column align-items-center'>
				<Col md={4}>
					<div className='beerDetailsImg'>
						<img src={beer.image_url} alt={beer.name} />
					</div>
					<Row>
						<Col>
							<h1>{beer.name}</h1>
						</Col>
						<Col>
							<p>{beer.attenuation_level}</p>
						</Col>
					</Row>
					<Row className='justify-content-between'>
						<Col>
							<p>{beer.tagline}</p>
						</Col>
						<Col>
							<p>{beer.first_brewed}</p>
						</Col>
					</Row>
					<p>{beer.description}</p>
					<p>{beer.contributed_by}</p>
				</Col>
			</Row>
		</div>
	)
}

export default BeerDetailsPage
