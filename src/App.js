import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import ItineraryPage from './components/itinerarypage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/itinerary/:location" element={<ItineraryPage />} />
      </Routes>
    </Router>
  );
};

export default App;
