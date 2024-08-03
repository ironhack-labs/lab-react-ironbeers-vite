import './BeerCardDetails.css';

const BeerCardDetails = ({ beer }) => {
  return (
    <div className="beer-card-details">
      <img src={beer.image_url} alt={beer.name} className="beer-card-image" />
      <h2 className="beer-card-heading">{beer.name}</h2>
      <p className="beer-card-tagline">{beer.tagline}</p>
      <p className="beer-card-info"><strong>First Brewed:</strong> {beer.first_brewed}</p>
      <p className="beer-card-info"><strong>Attenuation Level:</strong> {beer.attenuation_level}</p>
      <p className="beer-card-description">{beer.description}</p>
      <p className="beer-card-contributor"><strong>Contributed by:</strong> {beer.contributed_by}</p>
    </div>
  );
};

export default BeerCardDetails;