import BeersImage from '../assets/beers.png';
import RandomBeersImage from '../assets/random-beer.png';
import NewBeersImage from '../assets/new-beer.png';

function HomePage() {
    return (
        <div>
            <img src={BeersImage} />
            <h2>All Beers</h2>
            <p>Lorem Ipsum</p>
            <img src={RandomBeersImage} />
            <h2>Random Beer</h2>
            <p>Lorem Ipsum</p>
            <img src={NewBeersImage} />
            <h2>New Beer</h2>
            <p>Lorem Ipsum</p>
        </div>
    )
}

export default HomePage;
