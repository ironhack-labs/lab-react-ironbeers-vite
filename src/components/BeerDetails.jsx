import './BeerDetails.css';

export default function BeerDetails({ beer }) {
  const {
    image_url,
    attenuation_level,
    contributed_by,
    description,
    first_brewed,
    name,
    tagline,
  } = beer;

  return (
    <div className="BeerDetails">
      <img src={image_url} />
      <div className="container">
        <div className="row row-header">
          <h1>{name}</h1>
          <span className="right">{attenuation_level}</span>
        </div>
        <div className="row row-tagline">
          <span className="tagline">{tagline}</span>
          <span className="right">
            <strong>{first_brewed}</strong>
          </span>
        </div>
        <p className="description">{description}</p>
        <span className="contributed-by">{contributed_by}</span>
      </div>
    </div>
  );
}
