import { useEffect, useState } from 'react';
import httpBeers from './../assets/services/baseBeersServices';
import { Link } from "react-router-dom";

const AllBeersPage = () => {
    const [beers, setBeers] = useState([])

    useEffect(() => {
        httpBeers.get('/')
            .then((response) => {
                setBeers(response);
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <div>
            <h1>Todas las Cervezas</h1>
            
            <ul>
                {beers.map((beer) => (
                    <li key={beer._id}>
                        <Link to={`/beerDetails/${beer._id}`}>
                            <img src={beer.image_url} alt={beer.name} />
                            <h2>{beer.name}</h2>
                            <p>{beer.tagline}</p>
                            <p>{beer.contributed_by}</p>
                            {/* Puedes agregar más detalles de la cerveza según la estructura de tus datos */}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AllBeersPage;
