import axios from "axios"
import { useEffect, useState } from "react"
import BeerCard from "../components/BeerCard/BeerCard"
import { Container, Row } from "react-bootstrap"

const AllBeersPage = () => {

    const [beers, setBeers] = useState()

    const beersFromApi = () => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(({ data }) => setBeers(data))
            .catch(err => console.log(err))

        useEffect(() => {
            beersFromApi()
        }, [])

    }
    return (
        !beers
            ?
            <h2>Wait a moment...</h2>
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
