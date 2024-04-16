import { Link } from "react-router-dom";

function BeerCard({ image_url, _id, name, tagline, first_brewed, attenuation_level, description, contributed_by }) {

    return (
        <div className="container d-flex justify-content-center">
            <div className="card" style={{ maxWidth: "18rem" }}>
                <img
                    src={image_url}
                    className="card-img-top img-fluid"
                    alt={name}
                    style={{ maxHeight: "200px", objectFit: "contain" }}
                />
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items">
                        <h2 className="card-title">{name}</h2>
                        <h2 className="card-text text-secondary">{attenuation_level}</h2>
                    </div>
                    <div className="d-flex justify-content-between align-items">
                        <h4 className="card-text text-secondary">{tagline}</h4>
                        <span><b>{first_brewed}</b></span>
                    </div>
                    <p className="text-dark">{description}</p>
                    <p className="card-text text-secondary">{contributed_by}</p>
                </div>
            </div>
        </div>
    );
}

export default BeerCard;

