import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import BeerCardDetail from '../components/BeerCardDetail';

function BeerDetailsPage() {
    const { beerId } = useParams();
    const [beer, setBeer] = useState(null);
    
    useEffect(() => {
        axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then((beerDetail) => {
            setBeer(beerDetail.data);
        })
        .catch((error) => {
            console.error('Error fetching beer details:', error)
        });
    }, [beerId]); 

    return (
        <div>
            {beer && <BeerCardDetail {...beer} />}
        </div>
    );
}

export default BeerDetailsPage;
