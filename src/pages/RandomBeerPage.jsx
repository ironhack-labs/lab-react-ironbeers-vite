import axios from "axios";
import { useState, useEffect } from "react";

function RandomBeersPage() {
    const [randomBeer, setRandomBeer] = useState([])

    const getRandomBeer = async () => {
        try {
            const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random');
            setRandomBeer(response.data)
        } catch (error) {
            console.log('error fetching random beer', error)
        }
    };

    useEffect(() => {
        console.log('useEffect: Mounting')
        getRandomBeer();
    }, [])

    return (
        <div>
            {!randomBeer && <h3>No beer found</h3>}

            {randomBeer && (
                <div>
                    <img src={randomBeer.image_url} />
                    <h2>{randomBeer.name}</h2>
                    <p>{randomBeer.tagline}</p>
                    <p>{randomBeer.first_brewed}</p>
                    <p>{randomBeer.attenuation_level}</p>
                    <p>{randomBeer.description}</p>
                    <p>{randomBeer.contributed_by}</p>
                </div>
            )

            }
        </div>
    )

}

export default RandomBeersPage;
