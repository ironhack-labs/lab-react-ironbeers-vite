import { Link } from "react-router-dom";
import Beer from "./../assets/beers.png"
import RandomBeer from "./../assets/random-beer.png"
import NewBeer from './../assets/new-beer.png'

function HomePage() {
    return (
        <>
            <Link to={'/beers'}> <img src={Beer} alt="" /> Beers</Link>
            <Link to={'/random-beer'}> <img src={RandomBeer} alt="" />Random Beer</Link>
            <Link to={'/new-beer'}> <img src={NewBeer} alt="" /> NewBeer</Link>
        </>

    )
}

export default HomePage;
