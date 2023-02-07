import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import CoctailsDetails from './pages/CoctailDetails';

const App = () => {
  return (
    <div className="overflow-hidden bg- flex flex-col min-h-100vh ">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drinks/:id" element={<CoctailsDetails />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
