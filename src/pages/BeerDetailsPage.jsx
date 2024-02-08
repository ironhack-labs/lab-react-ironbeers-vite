import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBeerDetail } from '../assets/services/beerService';

const BeerDetailsPage = () => {
    const { id } = useParams();
    const [beer, setBeer] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getBeerDetail(id)
            .then((beerApi) => {
                setBeer(beerApi);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, [id]);

    if (loading) return 'Loading...';

    if (!beer) return 'Beer not found';

    return (
        <div>
            <h1>Beer details</h1>
            <img src={beer.image_url} alt={beer.name} />
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>
            <p>{beer.first_brewed}</p>
            <p>{beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
        </div>
    );
};

export default BeerDetailsPage;
