import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


function BeerDetailsPage() {
    const { beerId } = useParams();
    const [singleBeer, setSingleBeer] = useState([]);

    const getSingleBeer = async (id) => {
        try {
                const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
                console.log(response.data)
                setSingleBeer(response.data)
                
        } catch (error) {
                console.log('error fetching single beer', error)
        }
    };

    useEffect(() => {
        getSingleBeer(beerId);
    }, [beerId])

    return (
        <div>
            {!singleBeer && <h3>No beer found</h3>}

            {singleBeer && (
                <div>
                    <img src={singleBeer.image_url} />
                    <h2>{singleBeer.name}</h2>
                    <p>{singleBeer.tagline}</p>
                    <p>{singleBeer.first_brewed}</p>
                    <p>{singleBeer.attenuation_level}</p>
                    <p>{singleBeer.description}</p>
                    <p>{singleBeer.contributed_by}</p>
                </div>
            )}
        </div>
    )

}

export default BeerDetailsPage;
