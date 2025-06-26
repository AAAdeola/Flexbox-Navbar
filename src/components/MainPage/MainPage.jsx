import React from 'react';
import './MainPage.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// This section contains the hero banner and CTA button
// Toast notification triggers on button click

function MainPage() {
  const handleClick = () => {
    toast.success("Sorry this section is not available!", {
      position: 'top-right',
      autoClose: 3000,
    });
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to <span>1791</span></h1>
        <p>REDEFINING TECH, ONE LINE AT A TIME.</p>
        <button className="cta-btn" onClick={handleClick}>Get Started</button>
      </div>
      <div className="hero-image">
        <img src="https://illustrations.popsy.co/white/work-from-home.svg" alt="Hero" />
      </div>

      {/* Toast container */}
      <ToastContainer />
    </section>
  );
}

export default MainPage;
