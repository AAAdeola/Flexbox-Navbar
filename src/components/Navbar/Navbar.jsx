import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <nav className="navbar-custom">
      <div className="logo">✨ 1791</div>

      <div className={`nav-links ${open ? 'active' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>

      {/* Accessible hamburger button */}
      <button
        className={`hamburger ${open ? 'toggle' : ''}`}
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={toggleMenu}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') toggleMenu();
        }}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>
    </nav>
  );
}

export default Navbar;
