import { useEffect } from "react";
import { useState } from "react";
import axios, { Axios } from "axios";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";


function AllBeersPage() {

    const [beer, setBeers] = useState([])

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')

            .then(response => {

                setBeers(response.data)
            })
            .catch(error => {
                console.error('There was an error!', error);
            })
    }, [])

    return (
        <>
            {beer.map((elm) => {
                return (
                    <>
                        <Container className="d-flex">
                            <Link to={`/beers/${elm._id}`}>
                                <img src={elm.image_url} alt="" className="w-25 h-40" />
                            </Link>
                            <div className="d-flex align-items-start flex-column">
                                <h2>{elm.name}</h2>
                                <p>{elm.tagline}</p>
                                <p><strong>Created by: </strong>{elm.contributed_by}</p>
                            </div>

                        </Container>
                        <hr />
                    </>
                )
            })}
        </>
    )
}

export default AllBeersPage;
