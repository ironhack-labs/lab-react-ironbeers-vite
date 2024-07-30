import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <img src="src\assets\beers.png" alt="" />
      <Link className="link" to="/beers">
        <h2>All Beers</h2>
      </Link>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita nesciunt facere quis dicta minus praesentium!
      </p>
      
      <img src="src\assets\random-beer.png" alt="" />
      <Link className="link" to="/random-beer">
        <h2>Random Beer</h2>
      </Link>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae nisi autem beatae impedit odit iste.
      </p>

      <img src="src\assets\new-beer.png" alt="" />
      <Link className="link" to="/new-beer">
        <h2>New Beer</h2>
      </Link>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ratione, quae molestias laborum iusto fuga.
      </p>
    </>
  );
}

export default HomePage;
