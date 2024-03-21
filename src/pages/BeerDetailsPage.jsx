import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {
  const BASE_URL = "https://ih-beers-api2.herokuapp.com/beers";

  const [beer, setBeer] = useState({});
  const { beerId } = useParams();

  useEffect(() => {
    const getBeer = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/${beerId}`);
        console.log(res);
        setBeer(res.data);
      } catch (err) {
        console.log("Error fetching the beers:", error);
      }
    };
    getBeer()
  },[]);

  return (
    <div>
          <h1>{beer.name}</h1>
          <img src={beer.image_url} alt={beer.name}/>
          <p>{beer.tagline}</p>
          <p>First Brewed: {beer.first_brewed}</p>
          <p>Attenuation Level: {beer.attenuation_level}</p>
          <p>Description: {beer.description}</p>
          <p>Contributed by: {beer.contributed_by}</p>
        </div>
    
  );
}

export default BeerDetailsPage;
