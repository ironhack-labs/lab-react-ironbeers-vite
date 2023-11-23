import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function AllBeersPage() {

    const [beers, setBeers] = useState([])

    useEffect(() => {
        getAllBeers()
    }, [])

    const getAllBeers = () => {

        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers`)
            .then(response => setBeers(response.data))
            .then(err => console.log(err))


    }


    console.log(beers)
    return (
        <>
            {

                beers.map(e => {
                    return (
                        <div >
                            <img style={{ width: '10%' }} src={e.image_url} />
                            <p >{e.name}</p>
                            <p >{e.tagline}</p>
                            <p >{e.contributed_by}</p>
                            <Link to={`/beers/${e._id}`} >Ver Detalle</Link>

                        </div >

                    )

                })
            }

        </>
    )
}

export default AllBeersPage;
