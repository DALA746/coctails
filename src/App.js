import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import CoctailsDetails from './pages/CoctailDetails';
import ScrollToTop from './components/ScrollToTop';
import RandomPage from './pages/Random';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-secondary">
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drinks/:id" element={<CoctailsDetails />} />
          <Route path="/random" element={<RandomPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
