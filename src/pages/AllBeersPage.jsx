import { useEffect, useState } from 'react';
import { getBeers } from '../services/beerService';
import BeerCard from '../components/BeerCard';


function AllBeersPage() {
    const [beers, setBeers] = useState([])

    useEffect(() => {
        getBeers()
            .then((beersApi) => {
                setBeers(beersApi)
            })
            .catch((err) => console.error(err))
    }, [])

    return(
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {beers.map((beer) => (
                <div key={beer._id} className="col">
                    <BeerCard {...beer}/>
                </div>
            ))}
        </div>
    )
}

export default AllBeersPage;
