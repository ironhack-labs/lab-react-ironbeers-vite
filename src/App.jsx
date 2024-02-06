import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AllBeersPage from "./pages/AllBeersPage";
import RandomBeersPage from "./pages/RandomBeerPage";
import AddBearsPage from "./pages/AddBeerPage";
import BeerDetailsPage from "./pages/BeerDetailsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/beers" element={<AllBeersPage></AllBeersPage>}></Route>
      <Route
        path="/random-beer"
        element={<RandomBeersPage></RandomBeersPage>}
      ></Route>
      <Route path="/new-beer" element={<AddBearsPage></AddBearsPage>}></Route>
      <Route
        path="/beers/:beerId"
        element={<BeerDetailsPage></BeerDetailsPage>}
      ></Route>
    </Routes>
  );
}

export default App;
