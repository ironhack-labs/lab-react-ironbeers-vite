
import { Link } from 'react-router-dom';
import './BeerCard.css'; // Import the CSS file

function BeerCard({ beer }) {
  return (
    <div className="beer-card">
      <img src={beer.image_url} alt={beer.name} className="beer-image" />
      <div className="beer-details">
        <Link to={`/beers/${beer._id}`} className="beer-title">
          <h2>{beer.name}</h2>
        </Link>
        <p>{beer.tagline}</p>
        <p><strong>Contributed by:</strong> {beer.contributed_by}</p>
      </div>
    </div>
  );
}

export default BeerCard;