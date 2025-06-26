import React from 'react';
import Navbar from './components/Navbar/Navbar';
import MainPage from './components/MainPage/MainPage';
import FeaturesSection from './components/FeatureSection/FeaturesSection';

function App() {
  return (
    <div className="main-content">
      <Navbar />
      <MainPage />
      <FeaturesSection />
    </div>
  );
}

export default App;
