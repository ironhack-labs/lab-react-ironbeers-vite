import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {
  const { beer } = useParams();
  const [beerDetails, setBeerDetails] = useState([]);
  useEffect(() => {
    fetch(`https://ih-beers-api2.herokuapp.com/beers/${beer}`)
      .then((res) => res.json())
      .then((data) => setBeerDetails(data));
  }, []);
  if (beerDetails.length === 0) {
    return (
      <div className="bg-slate-900 text-white p-10 h-screen">
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div className="bg-slate-900 text-white p-10 h-screen">
      <div className="w-1/2  bg-slate-800 rounded-lg p-10 m-5">
        <img src={beerDetails.image_url} alt="" className="w-32 h-32" />
        <h1 className="text-2xl font-bold">{beerDetails.name}</h1>
        <p className="text-xl">{beerDetails.tagline}</p>
        <p>{beerDetails.description}</p>
        <p>First Brewed: {beerDetails.first_brewed}</p>
        <p>{beerDetails.contributed_by}</p>
        <p>Attenuation Level: {beerDetails.attenuation_level}</p>
      </div>
    </div>
  );
}

export default BeerDetailsPage;
