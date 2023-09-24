import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function AllBeersPage() {

    const [beersList, setBeersList] = useState()
    // const [backupBeersList, setBackupBeersList] = useState()

    const [beerQuery, setBeerQuery] = useState()
    useEffect(() => {
        getBeersList()
    }, [])

    const getBeersList = () => {
        return axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(({ data }) => setBeersList(data))
            .catch(err => console.log(err))
    }

    const filterBeersQuery = query => {
        return axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
            .then(({ data }) => setBeersList(data))
            .catch(err => console.log(err))

    }

    const handleBeerChange = e => {
        const { value } = e.target
        setBeerQuery(value)
        filterBeersQuery(value)
    }

    return (
        beersList ?
            <div className="beersList">
                <Container >
                    <FormGroup className="mt-3 mb-3">
                        <FormLabel><h3>Filter beers</h3></FormLabel>
                        <FormControl type="text" value={beerQuery} onChange={handleBeerChange}></FormControl>
                    </FormGroup>

                    {
                        beersList.map(({ image_url, name, tagline, contributed_by, _id }) => {
                            return (

                                <Row className="text-center" key={_id}>
                                    <Col ld={{ span: 3 }} >
                                        <Link to={`/beers/${_id}`}><img style={{ height: '100px' }} src={image_url} alt="Beer pic" /></Link>
                                    </Col>
                                    <Col ld={{ span: 9 }} className="text-start">
                                        <h3>{name}</h3>
                                        <h5>{tagline}</h5>
                                        <p><strong>Created by</strong>: {contributed_by}</p>
                                    </Col>
                                </Row>
                            )
                        })
                    }
                </Container>
            </div>
            :
            <Container className="mt-3">
                <h2>Loading...</h2>
            </Container>
    )
}

export default AllBeersPage;
