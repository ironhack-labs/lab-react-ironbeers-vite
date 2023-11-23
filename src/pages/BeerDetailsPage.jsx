import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {

    const { beerId } = useParams()
    const [oneBeer, setOneBeer] = useState({})

    useEffect(() => {
        getOneBeer()
    }, [])


    const getOneBeer = () => {

        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then(response => setOneBeer(response.data))
            .catch(err => console.log(err))

    }

    return (
        <div>
            <img style={{ width: '20%' }} src={oneBeer.image_url} />
            <p>{oneBeer.name}</p>
            <p>{oneBeer.tagline}</p>
            <p>{oneBeer.first_brewed}</p>
            <p>{oneBeer.attenuation_level}</p>
            <p>{oneBeer.description}</p>
            <p>{oneBeer.contributed_by}</p>

        </div>
    )
}

export default BeerDetailsPage;
