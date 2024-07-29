import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import AllBeersPage from "./pages/AllBeersPage";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<AllBeersPage />} />
        {/* <Route path="/random-beer" element={<RandomBeerPage />} /> */}
        {/* <Route path="/new-beer" element={<AddBeerPage />} /> */}
        {/* <Route path="/beers/:beerId" element={<BeerDetailsPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
