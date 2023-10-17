import beersImg from './../assets/beers.png'
import randomImg from './../assets/random-beer.png'
import newImg from './../assets/new-beer.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

const HomePage = () => {
	return (
		<div className='HomePage'>
			<Container className='mt-3'>
				<Row>
					<Col md={4}>
						<Link to={'/beers'}>
							<section className='beerSection'>
								<img className='mb-3' src={beersImg} alt='' />
								<h2 className='px-4'>All Beers</h2>
								<p className='px-4'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
									sunt labore aliquid, corporis odio magnam!
								</p>
							</section>
						</Link>
					</Col>
					<Col md={4}>
						<Link to={'/random-beer'}>
							<section className='beerSection'>
								<img className='mb-3' src={randomImg} alt='' />
								<h2 className='px-4'>Random Beer</h2>
								<p className='px-4'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
									sunt labore aliquid, corporis odio magnam!
								</p>
							</section>
						</Link>
					</Col>
					<Col md={4}>
						<Link to={'/new-beer'}>
							<section className='beerSection'>
								<img className='mb-3' src={newImg} alt='' />
								<h2 className='px-4'>New beer</h2>
								<p className='px-4'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
									sunt labore aliquid, corporis odio magnam!
								</p>
							</section>
						</Link>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default HomePage
