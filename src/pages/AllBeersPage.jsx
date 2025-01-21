import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {
    const [beers, setBeers] = useState([]);

    useEffect(()=>{
        fetch('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => response.json())
            .then(data => setBeers(data))
            .catch(err => console.log(err))
    }, [])

     if(beers.length === 0){
        return <p>Loading...</p>
     }   
    return (
        <div>
            {beers.map(beer => {
                    return <div key={beer._id}>
                       <Link to={`/beers/${beer._id}`}><img src={beer.image_url} width={'100px'} height={'100px'}/></Link> 
                        <h2>{beer.name}</h2>
                        <p>{beer.tagline}</p>
                        <p>Created by {beer.contributed_by}</p>
                    </div>
            })}
        </div>
    )

}

export default AllBeersPage;
