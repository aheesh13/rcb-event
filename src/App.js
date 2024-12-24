import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomCarousel from './Components/Carousal';
import ContactUs from './Components/ContactUs';
import RefundPolicy from './Components/RefundPolicy'; 
import Menu from './Components/MenuComponent';
import Cards from './Components/Cards';
import Booking from './Components/Booking';
import Payment from './Components/Payment';
import TypingSpeedCalculator from './Components/TypeSpeedCalculator';
import WhyChooseUs from './Components/WhyChooseUs';
import './styles.css';

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
          <Route path='/booking' element={<Booking/>}/>
          <Route path="/payment" element={<Payment />} />
          <Route path="/speed" element={<TypingSpeedCalculator />} />
          <Route path="/whychooseus" element={<WhyChooseUs />} />
          </Routes>
      </div>
    </Router>
  );
};

export default App;
