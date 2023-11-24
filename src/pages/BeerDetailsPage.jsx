import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function BeerDetailsPage() {

    const { beerId } = useParams()
    const [beer, setBeer] = useState()

    useEffect(() => {

        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then(({ data }) => setBeer(data))
            .catch(err => console.log(err))
    }, [])

    return (
        beer ?
            <div className="BeerDetailsPage">
                <div role="img">
                    <figure>
                        <img src={beer.image_url} alt={beer.name} />
                    </figure>
                </div>
                <div>
                    <div>
                        <h1>{beer.name}</h1>
                        <h2>{beer.attenuation_level}</h2>
                    </div>
                    <div>
                        <h3>{beer.tagline}</h3>
                        <h3>{beer.first_brewed}</h3>
                    </div>
                    <p>{beer.description}</p>
                    <h5>{beer.contributed_by}</h5>
                </div>
            </div>
            :
            <h1>Cargando...</h1>
    )
}

export default BeerDetailsPage;


