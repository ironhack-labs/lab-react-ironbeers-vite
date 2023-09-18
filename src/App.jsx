import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AllBeersPage from "./pages/AllBeersPage/AllBeersPage"
import RandomBeerPage from "./pages/RandomBeerPage/RandomBeerPage"
import AddBeerPage from "./pages/AddBeersPage/AddBeerPage"
import BeerDetailsPage from "./pages/BeerDetailsPage/BeerDetailsPage"
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">

    <Navbar />

      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/beers" element={<AllBeersPage/>}/>
        <Route path="/random-beer" element={<RandomBeerPage/>}/>
        <Route path="/new-beer" element={<AddBeerPage/>}/>
        <Route path="/beers/:beerId" element={<BeerDetailsPage/>}/>
        
      </Routes>

    </div>
  );
}

export default App;
