import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((res) => res.json())
      .then((data) => setBeers(data));
  }, []);
  if (beers.length === 0) {
    return (
      <div className="bg-slate-900 text-white p-10 h-screen">
        <img src="src\assets\Gif.gif" alt="" className="w-24 h-24" />
      </div>
    );
  }

  return (
    <div className="bg-slate-900 text-white p-10 h-full flex flex-wrap justify-center">
      {beers.map((beer) => (
        <div key={beer.id}>
          <div className="w-64 h-64 bg-slate-800 rounded-lg p-10 m-5">
            <NavLink to={`/Beers/${beer._id}`}>
              <img src={beer.image_url} alt="" className="w-24 h-24" />
            </NavLink>
            <h1>{beer.name}</h1>
            <p>{beer.tagline}</p>
            <p>{beer.contributed_by}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllBeersPage;
