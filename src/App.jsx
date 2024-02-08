import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import AllBeersPage from './pages/AllBeersPage';
import RandomBeerPage from './pages/RandomBeerPage';
import AddBeerPage from './pages/AddBeerPage';
import BeerDetailsPage from './pages/BeerDetailsPage';
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
    
    <div className="App">
    
          <h1>LAB | React IronBeers</h1>

      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/allBeers" element={<AllBeersPage />} />
      <Route path="/randomBeer" element={<RandomBeerPage />} />
      <Route path="/addBeer" element={<AddBeerPage />} />
      <Route path="/beerDetails/:id" element={<BeerDetailsPage />} />
      </Routes>
    </div>
    </div>
  );
}

export default App;
