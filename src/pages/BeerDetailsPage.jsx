import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './BeerDetailsPage.css';

function BeerDetailsPage() {
  const { beerId } = useParams();
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    fetch(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the response data to visualize the structure
        setBeer(data);
      })
      .catch((error) => console.log(error));
  }, [beerId]);

  if (!beer) {
    return <div>Loading...</div>;
  }

  return (
    <div className="beer-details-page">
      <img className="img" src={beer.image_url} alt={beer.name} />
      <div className="details-container">
        <div className="name-attenuation">
          <h1>{beer.name}</h1>
          <p> {beer.attenuation_level}</p>
        </div>
        <div className="tagline-first-brewed">
          <h2 className="tagline">{beer.tagline}</h2>
          <p> {beer.first_brewed}</p>
        </div>
        <p className="description">{beer.description}</p>
        <p><strong>Contributed by:</strong> {beer.contributed_by.split(" <")[0]}</p>
      </div>
    </div>
  );
}

export default BeerDetailsPage;