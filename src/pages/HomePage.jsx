import Navbar from "../components/Navbar";
import AllBeersImg from "../assets/beers.png";
import RandomBeerImg from "../assets/random-beer.png";
import NewBeerImg from "../assets/new-beer.png";
import { Link } from "react-router-dom";

function HomePage() {
  const divStyle = {
    padding: "5px",
  };
  const imgStyle = {
    height: "100%",
    width: "100%",
  };
  return (
    <div>
      <Navbar />
      <div style={divStyle}>
        <Link to="/beers">
          <img src={AllBeersImg} style={imgStyle} />
        </Link>
        <h1>All Beers</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit
          purus id pretium eleifend. In in augue vel felis fringilla dignissim
          id et eros. Morbi ornare mauris eget dolor volutpat pretium.
        </p>
      </div>
      <div style={divStyle}>
        <Link to="/beers/random">
          <img src={RandomBeerImg} style={imgStyle} />
        </Link>
        <h1>Random Beer</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit
          purus id pretium eleifend. In in augue vel felis fringilla dignissim
          id et eros. Morbi ornare mauris eget dolor volutpat pretium.
        </p>
      </div>
      <div style={divStyle}>
        <Link to="/new-beer">
          <img src={NewBeerImg} style={imgStyle} />
        </Link>
        <h1>New Beer</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit
          purus id pretium eleifend. In in augue vel felis fringilla dignissim
          id et eros. Morbi ornare mauris eget dolor volutpat pretium.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
