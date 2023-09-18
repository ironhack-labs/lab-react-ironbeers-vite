import { Link } from "react-router-dom";
import "./HomePage.css"

function HomePage() {
  return (
    <section>
      <div>
        <Link to="/beers">
          <img src="/src/assets/beers.png" alt="" />
          <h2>All Beers</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ut assumenda, nulla id animi maxime dolor quas dignissimos pariatur maiores sapiente soluta beatae minus corrupti cupiditate optio facere explicabo numquam!</p>
        </Link>
      </div>
      <div>
        <Link to="/random-beer">
          <img src="/src/assets/random-beer.png" alt="" />
          <h2>Random Beer</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, numquam nihil? Possimus veritatis esse dolorum blanditiis similique nam at iure eius odit, id eos facilis iste dolores vel commodi soluta?
          </p>
        </Link>
      </div>
      <div>
        <Link to="/new-beer">
          <img src="/src/assets/new-beer.png" alt="" />
          <h2>New Beer</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fuga architecto quos eveniet sit suscipit et pariatur, quas maxime nam nemo porro quaerat doloremque, perspiciatis neque voluptatibus deleniti cum asperiores.</p>
        </Link>
      </div>
    </section>
  );
}

export default HomePage;
