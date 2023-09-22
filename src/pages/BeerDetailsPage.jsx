import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const beerURL = 'https://ih-beers-api2.herokuapp.com/beers/'

function BeerDetailsPage() {
    const [foundBeer, setFoundBeer] = useState(null);
    const [error, setError] = useState(null);

    const { beerId } = useParams();

    useEffect(() => {
        console.log("useEffect - Initial render (Mounting)");
        axios.get(`${beerURL}${beerId}`)
            .then((response) => {
                setFoundBeer(response.data)
                console.log('found beer===', foundBeer)
            })
            .catch((error) => setError(error))
    }, [beerId]);

    return (
        <div className="">
            <p >Beer Details</p>
            {!foundBeer && <h3>Loading...</h3>}
            {
                foundBeer && (
                    <>
                        <img src={foundBeer.image_url} alt={foundBeer.name} />
                        <h4>{foundBeer.name}</h4>
                        <p>{foundBeer.tagline}</p>
                        <p>First brewed: {foundBeer.first_brewed}</p>
                        <p>Brewers tips: {foundBeer.brewers_tips}</p>
                        <p>{foundBeer.description}</p>
                        <p>{foundBeer.contributed_by}</p>



                        <Link to="/beers"> 👈🏼 to all Beers</Link>
                    </>
                )
            }
        </div >
    )
}

export default BeerDetailsPage;
