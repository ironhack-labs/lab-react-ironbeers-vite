import { useEffect, useState } from "react"
import apiService from "../../services/apibeers.services"

function AllBeersPage() {
    const [beerslist, setBeersList] = useState([])

    useEffect(() => {
        loaderbeers()
    }, [])

    const loaderbeers = () => {
        apiService.
            getBeers()
            .then(({ data }) => {
                setBeersList(data)
            })
            .catch((err) => {
                console.error("este es el error", err)
            });
    }

    // console.log("te devuelve esto----------->", beerslist)
    return (
        <div>
            <h1>BeerList 🍻</h1>
            <hr />

            {beerslist.map((beer) => (
                <div key={beer._id}>
                    <img src={beer.image_url} alt={beer.name} />
                    <h3>{beer.name}</h3>
                    <p>{beer.tagline}</p>
                    <p>Contributed by: {beer.contributed_by}</p>
                    <a href={`/beers/${beer._id}`}>Detalles</a>
                    <hr />
                </div>
            ))}
        </div>
    )
}

export default AllBeersPage