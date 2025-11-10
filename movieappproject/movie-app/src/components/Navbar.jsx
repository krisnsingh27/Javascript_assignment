import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-logo">
          <Link >My Movie App</Link>
        </div>

        
        <div className="navbar-links">
          <Link to="/movie">MovieSearch</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
          <Link to="/profile">Profile</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
