import { useEffect, useState } from "react";
import axios from "axios";
import BeerCard from "../components/BeerCard";
import "./AllBeersPage.css"

function AllBeersPage() {
    const [beers, setBeers] = useState([]);

    useEffect(() => { 
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
            .then(beer => {
                setBeers(beer.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []); 

    return (
        <>
            <h1>All Beers</h1>
            <div className="beer-list">
                {beers.map(beer => (
                    <div key={beer._id}>
                        <BeerCard {...beer}/>
                    </div>
                ))}
            </div>
        </>
    );
}

export default AllBeersPage;
