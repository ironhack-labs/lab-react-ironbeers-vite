import { Route, Routes } from "react-router-dom"
import "./App.css"
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar"
import AllBeersPage from "./pages/AllBeersPage"
import BeerDetailsPage from "./pages/BeerDetailsPage"
import RandomBeerPage from './pages/RandomBeerPage'
import AddBeerPage from './pages/AddBeerPage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/beers" element={<AllBeersPage />}></Route>
        <Route path="/random-beer" element={<RandomBeerPage />}></Route>
        <Route path="/new-beer" element={<AddBeerPage />}></Route>
        <Route path="/beers/:beerId" element={<BeerDetailsPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
