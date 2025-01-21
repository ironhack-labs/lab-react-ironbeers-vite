import { useParams } from "react-router-dom";
import { useState , useEffect} from "react";

function BeerDetailsPage() {
const { beerId }  = useParams();
console.log('beerId', beerId);

const [beer, setBeer] = useState({});

    useEffect(()=>{
        fetch('https://ih-beers-api2.herokuapp.com/beers/${beerId}')
            .then(response => response.json())
            .then(data => setBeer(data))
            .catch(err => console.log(err))
    }, [])

    return ( <div>
        <img src={beer.image_url} width={'100px'} height={'100px'} />
        <h2>{beer.name}</h2>
        <p>{beer.tagline}</p>
        <p>Created by {beer.contributed_by}</p>
        </div>)
}


export default BeerDetailsPage;