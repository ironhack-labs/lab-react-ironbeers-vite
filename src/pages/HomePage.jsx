import { Link } from "react-router-dom";
import Beer from "../assets/beers.png"
import newBeer from "../assets/new-beer.png"
import Random from "../assets/random-beer.png"


function HomePage() {

    return (
        <>
            <Link to="/beers" className="btn btn-dark">

                <img src={Beer} alt="beer" />
                <p>Ver todas las cervezas</p>

            </Link>
            <hr />
            <Link to="/random-beer" className="btn btn-dark">
                <img src={Random} alt="beer" />
                <p>Ver Cerveza random</p>
            </Link>
            <hr />
            <Link to="/new-beer" className="btn btn-dark">
                <img src={newBeer} alt="beer" />
                <p>Nueva cerveza</p>
            </Link>

        </>
    )
}

export default HomePage;
