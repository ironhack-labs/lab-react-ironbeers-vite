import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage" 
import AddBeerPage from "./pages/AddBeerPage" 
import AllBeersPage from "./pages/AllBeersPage" 
import RandomBeerPage from "./pages/RandomBeerPage" 
import BeersDetailsPage from "./pages/BeerDetailsPage"
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/beers" element={<AllBeersPage />} />
        <Route path="/beer/:beerId" element={<BeersDetailsPage />} />
        <Route path="/random-beer" element={<RandomBeerPage />} />
        <Route path="/add-beers" element={<AddBeerPage />} />
      </Routes>
    </div>
  );
}

export default App;
