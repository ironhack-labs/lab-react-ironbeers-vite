import { Link } from "react-router-dom";
import beers from "../assets/beers.png"
import randomBeer from "../assets/random-beer.png"
import newBeer from "../assets/new-beer.png"

function HomePage() {
  return (
    <div className="homeContainer">
      <Link to={`/beers`} className="allBeers">
        <br />
        <img src={beers} alt="beers" />
        <h1>All Beers</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut ultrices lorem, nec sollicitudin quam. Phasellus et quam rutrum dui lacinia bibendum et ut dolor. Ut nec nisl eget dolor suscipit bibendum sit amet in massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut libero.</p>
      </Link>

      <Link to={`/random-beer`} className="randomBeer">
        <br />
        <img src={randomBeer} alt="randomBeer" />
        <h1>Random Beer</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu malesuada sem. Ut ut consequat quam. Etiam vehicula ultrices lorem eget porttitor. Donec sollicitudin consectetur elit fermentum pellentesque. Donec tristique metus non arcu sollicitudin vehicula. Quisque eget purus eget tortor rutrum lobortis. Mauris dictum facilisis tempus. Aliquam euismod suscipit tristique.</p>
      </Link>
      
      <Link to={`/new-beer`} className="newBeer">
        <br />
        <img src={newBeer} alt="newBeer" />
        <h1>New Beer</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie, dolor imperdiet ullamcorper tincidunt, nibh risus luctus orci, sed condimentum lectus felis eget libero. Nam eu tristique metus, vel rutrum purus. Proin eget mauris at sapien mollis commodo ac ac ante. Orci varius natoque penatibus et magnis dis parturient montes.</p>
      </Link>
    </div>
  );
}

export default HomePage;
