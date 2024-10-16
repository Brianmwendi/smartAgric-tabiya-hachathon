import React from 'react';
import './Home.css'; // Optional CSS for styling
import { FaSeedling, FaLeaf, FaTools, FaInfoCircle, FaBriefcase } from 'react-icons/fa'; // Importing icons from react-icons

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">Empowering Youths for a Brighter Future</h1>
        <p className="hero-subtitle">
          Your one-stop solution for smart farming, crop management, and now job opportunities!
        </p>
        <a href="http://localhost:3001/job-matching">
          <button className="hero-button">Find Agricultural Jobs</button>
        </a>
      </div>

      <h1 className="welcome-title">Welcome to the Smart Agriculture System</h1>
      <p className="intro-text">
        This system is designed to assist farmers with the following features:
      </p>
      
      {/* Existing Feature Cards */}
      <div className="features-container">
        <div className="feature-card">
          <FaSeedling className="feature-icon" />
          <h2>Yield Prediction</h2>
          <p>Get accurate predictions on crop yield based on various parameters.</p>
          <button className="feature-button">Explore</button>
        </div>
        <div className="feature-card">
          <FaLeaf className="feature-icon" />
          <h2>Disease Prediction</h2>
          <p>Identify crop diseases from images and receive treatment suggestions.</p>
          <button className="feature-button">Explore</button>
        </div>
        <div className="feature-card">
          <FaTools className="feature-icon" />
          <h2>Crop Recommendation</h2>
          <p>Receive recommendations on the best crops to grow based on conditions.</p>
          <button className="feature-button">Explore</button>
        </div>
        <div className="feature-card">
          <FaInfoCircle className="feature-icon" />
          <h2>Advice</h2>
          <p>Get tailored advice on how to grow specified crops effectively.</p>
          <button className="feature-button">Explore</button>
        </div>
      </div>
      
      <div className="footer-note">
        <p>Explore our features by clicking the buttons above!</p>
      </div>
    </div>
  );
};

export default Home;
