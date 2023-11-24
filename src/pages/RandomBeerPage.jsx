import axios from "axios";
import { useEffect, useState } from "react";

function RandomBeersPage() {

    const [randomBeer, setRandomBeer] = useState()

    useEffect(() => {

        let lengthData

        axios
            .get('https://ih-beers-api2.herokuapp.com/beers')
            .then(({ data }) => {
                lengthData = data.length
                const randomNumber = Math.floor(Math.random() * lengthData)
                setRandomBeer(data[randomNumber])
            })
    }, [])

    return (
        randomBeer ?
            <div className="RandomBeerPage">
                <div role="img">
                    <figure>
                        <img src={randomBeer.image_url} alt={randomBeer.name} />
                    </figure>
                </div>
                <div>
                    <div>
                        <h1>{randomBeer.name}</h1>
                        <h2>{randomBeer.attenuation_level}</h2>
                    </div>
                    <div>
                        <h3>{randomBeer.tagline}</h3>
                        <h3>{randomBeer.first_brewed}</h3>
                    </div>
                    <p>{randomBeer.description}</p>
                    <h5>{randomBeer.contributed_by}</h5>
                </div>
            </div>
            :
            <h1>Cargando...</h1>
    )

}

export default RandomBeersPage;
