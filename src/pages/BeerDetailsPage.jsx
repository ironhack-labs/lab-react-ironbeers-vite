import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


function BeerDetailsPage() {

    const { beer_id } = useParams()

    const [beerInfo, setBeerInfo] = useState([])

    useEffect(() => {
        loadBeerInfo()
    }, [])


    const loadBeerInfo = () => {

        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beer_id}`)
            .then((response) => {
                // console.log(response.data);
                setBeerInfo(response.data);
            });
    }




    return (
        <div>

            <img src={beerInfo.image_url} alt="" style={{ width: "100px" }} />
            <p>{beerInfo.name}</p>
            <p>{beerInfo.tagline}</p>
            <p>{beerInfo.first_brewed}</p>
            <p>{beerInfo.attenuation_level}</p>
            <p>{beerInfo.description}</p>
            <p>{beerInfo.contributed_by}</p>
            <hr />

        </div>

    )


}

export default BeerDetailsPage;
