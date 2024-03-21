import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BASE_URL = "https://ih-beers-api2.herokuapp.com/beers";

function AllBeersPage() {

    const [beers, setBeers] = useState([]);

    useEffect(() => {
        //fetch beer data when components mounts.
        const fetchBeers = async () => {
            try {
                //axios => promise to GET data from beer API
                const res = await axios.get(BASE_URL);
                //if axious = success, setBeers data state updates
                console.log(res)
                setBeers(res.data);
            } catch (err) {
                //conditional if not = error
                console.log('Error fetching the beers:', error);
            }
        };
        fetchBeers(); //call the f(x) 
    }, []); //initial useState => 1st render in empty []

    //STEP 2 mapping
    const beerList = beers.map((beer) => {
        return (
            <Link key={beer._id} to={`/beers/${beer._id}`}>
            <div  className="container-card beer">
                <img className="beer-img" src={beer.image_url} alt={beer.name} /> 
                <div className="container-content-beer">
                <h3>{beer.name}</h3>
                <h5>{beer.tagline}</h5>
                <p><b>Created by: </b>{beer.contributed_by}</p>
                </div>   
            </div>
            </Link>
            
        )
    })

    return (
        <div>
            {beerList}
        </div>
    )
}

export default AllBeersPage;
