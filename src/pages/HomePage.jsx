import "./HomePage.css";

function HomePage() {
  // axios code
  return (
    <div id="Home">
      <div className="category">
        <img src="public/beers.png" />
        <h1>All Beers</h1>
        <p>Lorem Ipsum</p>
      </div>
      <div className="category">
        <img src="random-beer.png" />
        <h1>Random Beer</h1>
        <p>Lorem Ipsum</p>
      </div>
    </div>
  );
}

export default HomePage;
