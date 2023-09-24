import "./App.css";
import { Routes, Route } from 'react-router-dom'
import Navigation from "./components/Navbar";
import HomePage from "./pages/HomePage"
import AllBeersPage from "./pages/AllBeersPage"
import RandomBeerPage from "./pages/RandomBeerPage"
import AddBeerPage from "./pages/AddBeerPage"
import BeerDetailsPage from "./pages/BeerDetailsPage"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">

      <Navigation />
      <Routes>

        <Route path={"/"} element={<HomePage />} />
        <Route path={"/beers"} element={<AllBeersPage />} />
        <Route path={"/randon-beer"} element={<RandomBeerPage />} />
        <Route path={"/new-beer"} element={<AddBeerPage />} />
        <Route path={"/beers/:beerId"} element={<BeerDetailsPage />} />


      </Routes>

    </div>
  );
}

export default App;
