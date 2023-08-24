import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Container } from "react-bootstrap"
import beersService from "../services/beers.service"



const AllBeersPage = () => {

    const [beers, setBeers] = useState(null)

    useEffect(() => {

        loadBeers()

    }, [])

    const loadBeers = () => {

        beersService
            .getBeers()
            .then(({ data }) => setBeers(data))
            .catch(err => console.log(err))
    }

    if (!beers) {

        return (<h1>Loading...</h1>)

    } else {

        return (
            <>
                <Container>
                    {
                        beers.map(({ image_url, name, tagline, contributed_by, _id }) =>
                            <div key={_id} className="beer">
                                <img src={image_url} />
                                <h1>{name}</h1>
                                <p>{tagline}</p>
                                <p>{contributed_by}</p>
                                <Link to={`/beers/${_id}`}>{name}</Link>

                            </div>
                        )}
                </Container>
            </>
        )
    }
}

export default AllBeersPage
