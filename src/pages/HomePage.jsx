// import AddBeerPage from "./AddBeerPage";
// import AllBeersPage from "./AllBeersPage";
// import RandomBeersPage from "./RandomBeerPage";
import React from "react";
import BeersImage from "../assets/beers.png";
import randomImage from "../assets/random-beer.png";
import addImage from "../assets/beers.png";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function HomePage() {
  return (
    // <Routes>
    //   <Route path="/beers" element={<AllBeersPage />} />
    //   <Route path="/random-beer" element={<RandomBeersPage />} />
    //   <Route path="/new-beer" element={<AddBeerPage />} />
    // </Routes>
    <div>
      {/* 1. */}
      <div className="pageContainer">
        <img src={BeersImage} alt="beer-image" />

        <h1>
          <Link to="/beers"> All Beers</Link>
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>

      {/* 2 */}
      <div className="pageContainer">
        <img src={randomImage} alt="random-beer-image" />

        <h1>
          <Link to="/random-beer"> Random Beers</Link>
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>

        {/* 3 */}
      </div>
      <div className="pageContainer">
        <img src={addImage} alt="new-beer-image" />

        <h1>
          <Link to="/new-beer"> New Beer</Link>
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
