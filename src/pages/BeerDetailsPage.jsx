import { useEffect,useState } from "react";
import { getBeer } from "../services/BeersService";
import { useParams } from "react-router-dom";



function BeerDetailsPage() {
    const [beer, setBeer] = useState(null)
    const { beerId }= useParams()

    useEffect(()=>{
        getBeer(beerId)
         .then(response => setBeer(response))
         .catch((err) => console.error(err))
    },[beerId])

    


  return (
    <>
    {beer ? (
        <div className="card d-flex flex-column col-md-12 col-sm-10 col-lg-8 align-items-center m-3">
     
            <img
            className="card-img-top align-items-center"
            style={{ width: "200px" }}
            src={beer.image_url}
            alt="Card image cap"/>
            
            <div className="card-body">
            <div className="d-flex flex-row justify-content-between">
                <h5 className="card-title">{beer.name}</h5>
                <p>{beer.attenuation_level}</p>
            </div>
            <div className="d-flex flex-row justify-content-between">
            <h6 className="card-title">{beer.tagline}</h6>
            <p>{beer.first_brewed}</p>
            </div>
            <p>{beer.description}</p>
            <p className="card-text">
                contributed_by: {beer.contributed_by}
            </p>
            </div>
        </div>
    ) : ( <p>loading...</p> )}
    </>
   
  );
}

export default BeerDetailsPage;
