import { Link } from "react-router-dom";
import beersImage from '../assets/beers.png'
import randomBeer from '../assets/random-beer.png'
import addBeer from '../assets/new-beer.png'

const HomePage = () => {
    return (
        <>
        <Link to="/allBeers">
            <div>
            <img src={beersImage} alt="Beers"></img> 
            <h1>All Beers</h1>
            <p className="pStyle">Aquí están todas las cervezas!</p>
            </div>
        </Link>
        <Link to="/randomBeer">
            <div>
            <img src={randomBeer} alt="randomBeer"></img> 
            <h1>Random Beer</h1>
            <p className="pStyle">Quieres ver una cerveza random??</p>
            </div>
        </Link>
        <Link to="/addBeer">
            <div>
            <img src={addBeer} alt="addBeer"></img> 
            <h1>New Beer</h1>
            <p className="pStyle">Añade una cervez a la lista!</p>
            </div>
        </Link>
        </>
    );
}

export default HomePage;
