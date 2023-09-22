import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const beerURL = 'https://ih-beers-api2.herokuapp.com/beers'

function AllBeersPage() {
    const [beers, setBeers] = useState([]);
    const [fetching, setFetching] = useState(true);


    useEffect(() => {
        axios.get(beerURL).then((response) => {
            console.log("Beer data ====", response.data)
            setBeers(response.data);
            setFetching(false);
        });
    }, []);

    return (<div className="">
        <h1>All Beers</h1>
        {fetching && <p>Loading ...</p>}

        <div className="">
            {beers.map((beer) => {
                return (
                    <div key={beer._id}>
                        <Link className="beer-link" to={`/beers/${beer._id}`}>
                            <img src={beer.image_url}
                                alt={beer.name} />
                            <p>{beer.name}</p>
                            <p>{beer.description}</p>
                        </Link>
                    </div>
                )
            })}
        </div>
    </div>)



}



export default AllBeersPage;
