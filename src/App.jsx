import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddBeerPage from './pages/AddBeerPage';
import AllBeersPage from './pages/AllBeersPage';
import HomePage from './pages/HomePage';
import BeerDetailsPage from './pages/BeerDetailsPage';
import RandomBeersPage from './pages/RandomBeerPage';

function App() {
  return (
    <div className="App">
      <h1>LAB | React IronBeers</h1>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/beers" element={<AllBeersPage/>}/>
        <Route path="/random-beer" element={<RandomBeersPage/>}/>
        <Route path="/new-beer" element={<AddBeerPage/>}/>
        <Route path="/beers/:beerId" element={<BeerDetailsPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
