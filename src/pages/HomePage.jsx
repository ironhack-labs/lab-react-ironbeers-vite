import React from 'react';
import { Link } from 'react-router-dom';
import beers from '../assets/beers.png';
import randomBeer from '../assets/randomBeer.png';
import newBeer from '../assets/newBeer.png';
import Navbar from '../components/Navbar';
function HomePage() {
  return (
    <div className = "main">
<Navbar className ="home-icon"/> 
      <ul>
        <section className="beers">
        <img src={beers} alt="beers" />
        <a>
          <Link to="/beers"><h1>All Beers</h1></Link>
        </a>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eligendi earum ea, ullam dolorem pariatur, sed mollitia molestias odio est vero ducimus suscipit tempora voluptatum possimus enim. Ex, inventore sit!</p>
        <br/>
        </section>
        <section className="random-beer">
        <img src={randomBeer} alt="random-beer" />
        <a>
          <Link to="/random-beer"><h1>Random Beer</h1></Link>
        </a>
    
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, perferendis cum. Minima enim eos aperiam esse quae, suscipit voluptas omnis labore qui saepe iure nobis excepturi, cumque magni nostrum autem.</p>
        <br/>
        </section>
        <section className="new-beer">
        <img src={newBeer} alt="new-beer" />
        <a>
          <Link to="/new-beer"><h1>New Beer</h1></Link>
        </a>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, perferendis cum. Minima enim eos aperiam esse quae, suscipit voluptas omnis labore qui saepe iure nobis excepturi, cumque magni nostrum autem.</p>
      </section>
      </ul>
    </div>
  );
}

export default HomePage;