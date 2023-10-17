import { useEffect, useState } from 'react'
import beerService from '../services/beerService.service'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

const AllBeersPage = () => {
	const [beers, setBeers] = useState('')

	useEffect(() => {
		loadBeers()
	}, [])

	const loadBeers = () => {
		beerService
			.getBeers()
			.then(({ data }) => setBeers(data))
			.catch(err => console.log(err))
	}

	return !beers ? (
		<h2>...loading</h2>
	) : (
		<Container>
			<Row>
				{beers.map(({ _id, image_url, name, tagline, contributed_by }) => {
					return (
						<>
							<Col md={4} className='beerCard'>
								<img className='beerImg' src={image_url} alt='' />
								<div>
									<h3>{name}</h3>
									<p>{tagline}</p>
									<p>{contributed_by}</p>
								</div>
								<Link to={`/beers/${_id}`} className='btn btn-dark'>
									See Details
								</Link>
							</Col>
						</>
					)
				})}
			</Row>
		</Container>
	)
}

export default AllBeersPage
