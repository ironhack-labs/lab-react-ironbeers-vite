import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {

    const { beerId } = useParams();
    const [ beer, setBeer ] = useState();

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then(response => {
                console.log(response.data);
                setBeer(response.data);
            })
    }, [beerId]);

    if (!beer) {
        return <p>Loading...</p>
    } else {
        return (
        <div className="card">
            <img src={beer.image_url} className="card-img-top mt-3 ms-3" style={{width: "100px"}}/>
            <div className="card-body">
                <h1 className="card-text">{beer.name}</h1>
                <p className="text-end">{beer.attenuation_level}</p>
                <p className="text-end"><b>{beer.first_brewed}</b></p>
                <h5>{beer.tagline}</h5>
                <p>{beer.description}</p>
                <small>{beer.contributed_by}</small>
            </div>
        </div>
        );
    }
}

export default BeerDetailsPage;
