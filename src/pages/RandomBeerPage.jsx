import axios from "axios";
import { useEffect, useState } from "react";

function RandomBeersPage() {

    const [beer, setBeer] = useState({})

    useEffect(() => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then(({ data }) => setBeer(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div key={beer._id}>
            <img src={beer.image_url} alt="" style={{ width: '4%' }} />
            <h3>Name: {beer.name}</h3>
            <h4>Tagline: {beer.tagline}</h4>
            <p>First brewed: {beer.first_brewed}</p>
            <p>Attenuation level: {beer.attenuation_level}</p>
            <p>Description: {beer.description}</p>
            <p>Created by: {beer.contributed_by}</p>
            <hr />
        </div>
    )

}

export default RandomBeersPage;
