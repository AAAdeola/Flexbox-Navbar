import React, { useState } from 'react';
import './Navbar.css';

// This is the adaptive navbar component using Flexbox
// It collapses into a hamburger menu on smaller screens

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar-custom">
      <div className="logo">✨ 1791</div>

      <div className={`nav-links ${open ? 'active' : ''}`}>
        <a href="HomePage">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </div>

      <div
        className={`hamburger ${open ? 'toggle' : ''}`}
        onClick={() => setOpen(!open)}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
}

export default Navbar;
