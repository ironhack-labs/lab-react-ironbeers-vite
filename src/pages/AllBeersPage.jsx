import { useEffect, useState } from 'react'
import beersService from './../services/beers.services'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const AllBeersPage = () => {

    const [beers, setBeers] = useState([])

    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {
        beersService
            .getAllBeers()
            .then(({ data }) => setBeers(data))
            .catch(err => console.log(err))
    }

    return (
        !beers ?
            <h2>Loading...</h2>
            :

            <div className='AllBeersPage'>
                <Row>
                    {
                        beers.map(beer => {
                            const { _id, image_url, name, tagline, contributed_by } = beer
                            return (
                                <Col key={_id} lg={{ span: 12 }}>
                                    <Link
                                        className="BeerElement"
                                        to={`/beers/${_id}`} >
                                        <Col lg={{ span: 4 }}>

                                            <figure className='BeerImage'>
                                                <img src={image_url} alt={name} />
                                            </figure>
                                        </Col>
                                        <Col lg={{ span: 8 }}>
                                            <div className='BeerInfo'>
                                                <h2>{name}</h2>
                                                <h3>{tagline}</h3>
                                                <p>{contributed_by}</p>
                                            </div>
                                        </Col>
                                    </Link>
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
    )
}

export default AllBeersPage
