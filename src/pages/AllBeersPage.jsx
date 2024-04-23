import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {

    const [ beers, setBeers ] = useState([]);
    const [ searchState, setSearchState ] = useState(false);

    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
            .then(response => {
                console.log(response.data);
                setBeers(response.data);
            });
    }, []);

    const handleChange = (event) => {
        const query = event.currentTarget.value;
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
            .then(response => {
                setBeers(response.data);
                setSearchState(true);
            })
    }

    if (!beers.length && !searchState) {
        return <p>Loading...</p>
    } else {
        return (
            <div>
                <input type="text" onChange={handleChange} className="form-control mb-3" placeholder="Search..." />

                {!beers.length && searchState && <p>No results found</p>}

                <div className="list-group">
                    {beers.map(beer => (
                        <div key={beer._id} className="card border-dark mb-3">
                            <Link to={`/beers/${beer._id}`}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={beer.image_url} className="img-fluid rounded-start mt-1 mb-1 ms-5" style={{maxHeight: "150px"}}/>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h2>{beer.name}</h2>
                                            <p className="card-text">{beer.tagline}</p>
                                            <small><b>Created by: </b>{beer.contributed_by}</small>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default AllBeersPage;