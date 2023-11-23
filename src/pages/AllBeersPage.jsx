import axios from "axios"
import { useEffect, useState } from "react"
import BeerCard from "../components/BeerCard"
import { Col, Container, Row } from "react-bootstrap"

const AllBeersPage = () => {

    const [beers, setBeers] = useState()

    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(({ data }) => setBeers(data))
            .catch(err => console.log(err))
    }
    return (
        !beers
            ?
            <h2>Loading..</h2>
            :
            <div className="AllBeers">
                <Container>
                    <Row>
                        {
                            beers.map(elm => <BeerCard key={elm._id} {...elm} />)
                        }
                    </Row >
                </Container>
            </div >
    )
}

export default AllBeersPage
