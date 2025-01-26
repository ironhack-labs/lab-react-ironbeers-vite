    import { useState,useEffect } from "react";
    import { listBeers } from "../services/BeersService";
    import { Link } from "react-router-dom";

    function AllBeersPage() {
        const [beers, setBeers] = useState(null)

        useEffect(()=>{
            listBeers()
            .then((response)=>{
                setBeers(response)
            })
            .catch((err)=>console.error(err))

        },[])

        return (
            <>
            {beers ? (
                beers.map(beer=>(
                    <div className="card d-flex flex-row col-sm-12 " key={beer._id}>
                        <img className="card-img-top img-thumbnail" style={{width:'100px'}} src={beer.image_url} alt="Card image cap"></img>
                        <div className="card-body">
                        <Link rel="stylesheet" to={`/beers/${beer._id}`}>
                        <h5 className="card-title">{beer.name}</h5>
                        </Link>
                        <h6 className="card-title">{beer.tagline}</h6>
                        <p className="card-text"><strong>Created by:</strong> {beer.contributed_by}</p>
                        
                            
                       
                        </div>
                    </div>
                ))
            ) : ( <p>loading...</p> ) }
            </>


        )
    }

    export default AllBeersPage;
