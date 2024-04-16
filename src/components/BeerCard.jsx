import { Link } from "react-router-dom";

function BeerCard({ image_url, _id, name, tagline, contributed_by }) {
    const contributedBy = contributed_by.replace(/<.*?>/g, '');

    return (
        <div className="card" style={{ maxWidth: "18rem" }}>
            <img
                src={image_url}
                className="card-img-top img-fluid"
                alt={name}
                style={{ maxHeight: "200px", objectFit: "contain" }}
            />
            <div className="card-body">
                <Link to={`/beers/${_id}`}>
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{tagline}</p>
                    <p className="card-text">Contributed by: {contributedBy}</p>
                </Link>
            </div>
        </div>
    );
}

export default BeerCard;
