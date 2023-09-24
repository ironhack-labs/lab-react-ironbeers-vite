import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {
    const [beersArray, setBeers] = useState([])

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => {
                const { data: beersArray } = response
                console.log(beersArray)
                setBeers(beersArray)

            })

        //pasa esto a un service

    }, [])

    return (
        <div className="allBeersPage">
            {
                beersArray.map(beer => {
                    return (
                        <Link to={beer._id} key={beer._id}>

                            <img src={beer.image_url} alt="{beer.name}" />
                            <h2>{beer.name}</h2>
                            <h4>{beer.tagline}</h4>
                            <p><strong>Created by: {beer.contributed_by}</strong></p>

                            <hr />

                        </Link>
                    )
                })
            }
        </div>
    )
}

export default AllBeersPage;
