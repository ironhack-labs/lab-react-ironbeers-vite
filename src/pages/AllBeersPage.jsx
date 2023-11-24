import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function AllBeersPage() {

    const [beers, setBeers] = useState()

    useEffect(() => {
        axios
            .get('https://ih-beers-api2.herokuapp.com/beers')
            .then(({ data }) => setBeers(data))
            .catch(err => console.log(err))
    }, [])

    return (
        beers ?
            <div className="AllBeersPage">
                {
                    beers.map(elm => {
                        return (
                            <div className="card" key={elm._id}>
                                <Link to={'/beer/' + elm._id} >
                                    <div>
                                        <figure>
                                            <img src={elm.image_url} alt={elm.name} />
                                        </figure>
                                    </div>
                                    <div>
                                        <h1>{elm.name}</h1>
                                        <h3>{elm.tagline}</h3>
                                        <p><strong>Created by: {elm.name}</strong></p>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }

            </div> :
            <h1>Cargando...</h1>
    )
}

export default AllBeersPage;

