    import { useState,useEffect } from "react";
    import { listBeers } from "../services/BeersService";
    import { Link } from "react-router-dom";
    import SearchBar from "../components/SearchBar";
    import { searchBeer } from "../services/BeersService";
    

    function AllBeersPage() {

        const [filter, setFilter] = useState({
            search:""
        })

        const [beers, setBeers] = useState(null)

        const searchBeers = ()  => {
            return beers
            ? beers.filter((beer) =>
                beer.name.toLowerCase().includes(filter.search.toLowerCase())
              )
            : [];
        }
        const beersFilter = searchBeers()

        useEffect(()=>{
            searchBeer(filter.search)
            .then((response)=>{
                setBeers(response)
            })
            .catch((err)=>console.error(err))

        },[filter.search])

        return (
            <>
            <SearchBar filter={filter} setFilter={setFilter}/>

            {beers ? (
        beersFilter.length > 0 ? (
          beersFilter.map((beer) => (
            <div className="card d-flex flex-row col-sm-12 my-2" key={beer._id}>
              <img
                className="card-img-top img-thumbnail"
                style={{ width: "100px" }}
                src={beer.image_url}
                alt={`Imagen de ${beer.name}`}
              />
              <div className="card-body">
                <Link rel="stylesheet" to={`/beers/${beer._id}`}>
                  <h5 className="card-title">{beer.name}</h5>
                </Link>
                <h6 className="card-title">{beer.tagline}</h6>
                <p className="card-text">
                  <strong>Created by:</strong> {beer.contributed_by}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No se encontraron cervezas que coincidan con la búsqueda.</p>
        )
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

    export default AllBeersPage;
