import "./App.css";
import HomePage from "./pages/HomePage.jsx";
import { Routes, Route } from "react-router-dom";
import RandomBeerPage from "./pages/RandomBeerPage.jsx";
import AddBeerPage from "./pages/AddBeerPage.jsx";
import AllBeersPage from "./pages/AllBeersPage.jsx";
import BeerDetailsPage from "./pages/BeerDetailsPage.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/Beers" element={<AllBeersPage />}/>
        <Route path="/Beers/Random" element={<RandomBeerPage />}/>
        <Route path="/Beers/Add" element={<AddBeerPage />}/>
        <Route path="/Beers/:beer" element={<BeerDetailsPage />}/>
      </Routes>
    </div>
  );
}

export default App;
