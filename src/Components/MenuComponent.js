import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="menu">
      <div className="logo">
      <Link to="/" className="nav-link">
      <img src="/Images/logo.png" alt="RCB Logo" className='logo'/>
      </Link>
      </div>
      <div className="navigation">
        <Link to="/" className="nav-link">
          <button className="nav-button">Home</button>
        </Link>
        <Link to="/contact" className="nav-link">
          <button className="nav-button">Contact Us</button>
        </Link>
        <Link to="/terms" className="nav-link">
          <button className="nav-button">Refund Policy</button>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
