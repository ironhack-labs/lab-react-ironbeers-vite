import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AllBeersPage from './pages/AllBeersPage';
import BeerDetailsPage from './pages/BeerDetailsPage';
import AddBeerPage from './pages/AddBeerPage';
import RandomBeerPage from './pages/RandomBeerPage';
import Navbar from './components/Navbar';
import "./App.css";

function App() {
  return (
    <div className="App">
     <Navbar />

     <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/beers' element={<AllBeersPage />} />
     </Routes>
    </div>
  );
}

export default App;
