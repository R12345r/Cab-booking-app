import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Booking from './components/CabBooking';
import cabCategories from './data/cabs';
import SearchResults from './components/SearchResults';
import Navbar from './components/Navbarapp';


function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/booking/:id" element={<Booking cabCategories={cabCategories} />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
