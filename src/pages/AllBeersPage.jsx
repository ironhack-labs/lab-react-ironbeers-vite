import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function AllBeersPage() {
    const [allBeers, setAllBeers] = useState([]);
    const [search, setSearch] = useState("");

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

    // const query = event => {
    //     setSearch(event.target.value)
    //     handleSearch(event.target.value)
    // }

    // const handleSearch = async(query) => {
    //     try {
    //         const responseSearch = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`);
    //         setAllBeers(responseSearch.data)
    //     } catch (error) {
    //         console.log('error fetching search value', error)
    //     }
        
    // }

    const handleSearch = async(event) => {
        const query = event.target.value;
        setSearch(query);
        try {
            const responseSearch = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
            setAllBeers(responseSearch.data);
        } catch (error) {
            console.log('error fetching search value', error)
        }
    }



    return (
        <div>
            <form>
                <label>Search</label>
                <input type="text" placeholder="Search..." value={search} onChange={handleSearch} /> 
                {/* onChange={query} */}
            </form>
            

            <ul>
                {allBeers.map(beer => {
                    return (
                        <li key={beer._id}>
                            <img src={beer.image_url} />
                            <Link to={`/beers/${beer._id}`}>
                                <h1>{beer.name}</h1>
                            </Link>
                            <p>{beer.tagline}</p>
                            <p>Created by: {beer.contributed_by}</p>
                        </li>
                    )
                })}
                
            </ul>
        </div>
    )
}

export default AllBeersPage;
