import { NavLink } from "react-router-dom";
import AllBeersPage from "./AllBeersPage.jsx";
import RandomBeerPage from "./RandomBeerPage.jsx";
import AddBeerPage from "./AddBeerPage.jsx";

function HomePage() {
  return (
    <div className="HomePage bg-slate-900 text-white p-10 h-screen">
      <h1 className="text-4xl font-bold">Home Page</h1>
      <div className="flex flex-row mt-5 justify-around">
        <div className="size-1/4 flex flex-col justify-center">
          <img src="src\assets\beers.png" alt="beer" className="h-32"/>
          <NavLink className="text-2xl font-bold text-center" to="/Beers">
            All Beers
          </NavLink>
        </div>
        <div className="size-1/4 flex flex-col justify-center">
          <img src="src\assets\random-beer.png" alt="" className="h-32"/>
          <NavLink className="text-2xl font-bold text-center" to="/Beers/Random">
            Random Beer
          </NavLink>
        </div>
        <div className="size-1/4 flex flex-col justify-center">
          <img src="src\assets\new-beer.png" alt="" className="h-32"/>
          <NavLink className="text-2xl font-bold text-center" to="/Beers/Add">
            Add Beer
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
