import React from 'react';
import './FeaturesSection.css';
import { FaRocket, FaShieldAlt, FaCogs } from 'react-icons/fa';

function FeaturesSection() {
  return (
    <section className="features-section">
      <h2>Why Choose Us</h2>
      <div className="features-grid">
        <div className="feature-card">
          <FaRocket size={40} />
          <h3>Fast Performance</h3>
          <p>Optimized for speed and reliability across all devices.</p>
        </div>
        <div className="feature-card">
          <FaShieldAlt size={40} />
          <h3>Secure & Trusted</h3>
          <p>Built with modern security standards in mind.</p>
        </div>
        <div className="feature-card">
          <FaCogs size={40} />
          <h3>Customizable</h3>
          <p>Easily adaptable to fit your needs and goals.</p>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
