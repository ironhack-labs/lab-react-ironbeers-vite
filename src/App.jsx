import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <Routes>
    <Route path="/" element={<HomePage />} />
    {/* <Route path="/beers" element={<AddBeersPage />} />
    <Route path="/random-beer" element={<RandomBeerPage />} />
    <Route path="/new-beer" element={<AddBeerPage />} />
    <Route path="/beers/:beerId" element={<BeerDetailsPage  />} /> */}
  </Routes>
  );
}

export default App;
