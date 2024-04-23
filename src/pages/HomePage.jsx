import { Link } from "react-router-dom";

function HomePage() {

    return(
        <div className="d-flex">
            <div className="card border-dark me-3">
                <Link to="/beers">
                    <img src="/src/assets/beers.png" className="card-img-top" />
                    <div className="card-body">
                        <h2>All Beers</h2>
                        <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, vel maiores vitae voluptates ab ea ratione placeat unde officiis quae aliquid.</p>
                    </div>
                </Link>
            </div>
            <div className="card border-dark me-3">
                <Link to="/random-beer">
                    <img src="/src/assets/random-beer.png" className="card-img-top" />
                    <div className="card-body">
                        <h2>Random Beer</h2>
                        <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, vel maiores vitae voluptates ab ea ratione placeat unde officiis quae aliquid.</p>
                    </div>
                </Link>
            </div>
            <div className="card border-dark">
                <Link to="/new-beer">
                    <img src="/src/assets/new-beer.png" className="card-img-top" />
                    <div className="card-body">
                        <h2>New Beer</h2>
                        <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, vel maiores vitae voluptates ab ea ratione placeat unde officiis quae aliquid.</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default HomePage;
