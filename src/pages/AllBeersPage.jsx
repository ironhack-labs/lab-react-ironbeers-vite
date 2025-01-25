    import { useState,useEffect } from "react";
    import { listBeers } from "../services/BeersService";
    import { Link } from "react-router-dom";

    function AllBeersPage() {
        const [beers, setBeers] = useState(null)

        useEffect(()=>{
            listBeers()
            .then((response)=>{
                console.log(response)
                setBeers(response)
            })
            .catch((err)=>console.error(err))

        },[])

        return (
            <>
            {beers ? (
                beers.map(beer=>(
                    <div className="card d-flex flex-row " key={beer._id}>
                        <img className="card-img-top img-thumbnail" style={{width:'100px'}} src={beer.image_url} alt="Card image cap"></img>
                        <div className="card-body">
                        <h5 className="card-title">{beer.name}</h5>
                        <h6 className="card-title">{beer.tagline}</h6>
                        <p className="card-text">contributed_by: {beer.contributed_by.split(" <")[0]}</p>
                        <Link rel="stylesheet" to={`/beers/${beer._id}`}/>
                        </div>
                    </div>
                ))
            ) : ( <p>loading...</p> ) }
            </>


        )
    }

    export default AllBeersPage;
