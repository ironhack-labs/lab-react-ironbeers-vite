import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BeerDetailsPage(props) {
//console.log(beer._id)
const {beerId} = useParams()
const {beerDetails, setBeerDetails} = useState({})


    useEffect(()=>{
        axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then((response)=>{
            console.log(response.data);
          // setBeerDetails(response.data)
        })
        .catch(e => console.log("Madamme, an error has ocurred while displaying the details of the beer", e))
    }, [beerId])


    return 
    //(

    //     <section key={beerDetails._id}>
    //     <img src={beerDetails && beerDetails.image_url} alt={beerDetails.name} />
    //     <h2>{beerDetails && beerDetails.name}</h2>
    //     <h3>{beerDetails && beerDetails.tagline}</h3>
    //     <h4>contributed by: {beerDetails && beerDetails.contributed_by}</h4>
    // </section>
     // );
}

export default BeerDetailsPage;
