import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



function AllBeersPage() {

    const [beersList, setBeersList] = useState([])

    useEffect(()=>{
        axios
        .get(`${import.meta.env.VITE_API_URL}/beers`)
        .then((response)=>{
            setBeersList(response.data)
        })
        .catch(e => console.log("Madamme, an error has ocurred while displaying the list of beers", e))
    }, [])

    return beersList.map((beer) => {
      return (
        <section key={beer._id}>
          <Link to={"/beers/" + beer._id}>
            <img src={beer.image_url} alt={beer.name} />
            <h2>{beer.name}</h2>
            <h3>{beer.tagline}</h3>
            <h4>contributed by: {beer.contributed_by}</h4>
            <hr />
          </Link>
        </section>
      );
    });
}

export default AllBeersPage;
