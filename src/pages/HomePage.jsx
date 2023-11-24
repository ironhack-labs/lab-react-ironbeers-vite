import { Link } from "react-router-dom";
import img1 from "../assets/beers.png"
import img2 from "../assets/random-beer.png"
import img3 from "../assets/new-beer.png"


function HomePage() {
    return (
        <div>
            <img src={img1} />
            <li>
                <Link to="/beers"><h1>Todas las cervezas</h1></Link>
            </li>
            <img src={img2} />
            <li>
                <Link to="/random-beer"><h1>Cerveza aleatoria</h1></Link>
            </li>
            <img src={img3} />
            <li>
                <Link to="/new-beer"><h1>Nueva Cerveza</h1></Link>
            </li>

        </div>
    )
}

export default HomePage;
