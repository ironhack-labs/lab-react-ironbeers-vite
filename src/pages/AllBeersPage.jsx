import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function AllBeersPage() {
    const [allBeers, setAllBeers] = useState([]);

    const getAllBeers = async () => {
        try {
            const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers'
            );  
            //console.log(response.data);
            setAllBeers(response.data)
        } catch (error) {
            console.log('error fetching the projects', error)
        }
    };

    useEffect(() => {
        console.log('useEffect: Mounting');
        getAllBeers();
    }, []);

    return (
        <ul>
            {allBeers.map(beer => {
                
                return (
                    <li key={beer._id}>
                        <img src={beer.image_url} />
                        <Link to={`/beers/${beer._id}`}>
                            <h1>{beer.name}</h1>
                        </Link>
                        <p>{beer.tagline}</p>
                        <p>{beer.contributed_by}</p>
                    </li>
                )
            })}
            
        </ul>
    )
}

export default AllBeersPage;
