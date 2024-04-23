import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomCarousel from './Components/Carousal';
import ContactUs from './Components/ContactUs';
import RefundPolicy from './Components/RefundPolicy'; 
import Menu from './Components/MenuComponent';
import Cards from './Components/Cards';

const App = () => {
  return (
    <Router>
      <div>
        <Menu />
        <Routes>
          <Route path="/" element={<CustomCarousel />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/terms" element={<RefundPolicy/>} />
          <Route path="/cards" element={<Cards/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
