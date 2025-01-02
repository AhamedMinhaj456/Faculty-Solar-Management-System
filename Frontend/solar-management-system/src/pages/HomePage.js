import React from 'react';
import './HomePage.css';
import RealTimeMonitoring from '../images/Real-Time-Monitoring.png';
import AdvancedAnalytics from '../images/Advanced-Analytics.png';
import SustainabilityGoals from '../images/Sustainability-Goals.png';


const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <div >
            <div className="hero-content-h1">Solar Management System </div>
            <div className="hero-content-h2">
              Efficiently manage your solar energy systems with advanced analytics and real-time monitoring.
              <br /> Built for the Faculty of Technology, University of Rajarata.
            </div>
            <button className="hero-button">Get Started</button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Us</h2>
        <p>
          Our Solar Management System offers a comprehensive platform for monitoring, optimizing, and maximizing solar energy efficiency. Tailored for academic and research excellence, this platform empowers users to harness the power of the sun with confidence.
        </p>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <div className="features-container">
          <div className="feature">
            <img src={RealTimeMonitoring} alt="Real-Time Monitoring" />
            <h3>Real-Time Monitoring</h3>
            <p>Access live data and insights for efficient solar management.</p>
          </div>
          <div className="feature">
            <img src={AdvancedAnalytics} alt="Advanced Analytics" />
            <h3>Advanced Analytics</h3>
            <p>Analyze energy performance and optimize for better results.</p>
          </div>
          <div className="feature">
            <img src={SustainabilityGoals} alt="Sustainability Goals" />
            <h3>Sustainability Goals</h3>
            <p>Track environmental impact and progress toward sustainability.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Join the Solar Revolution</h2>
        <p>
          Be a part of a sustainable future. Start managing your solar systems effectively today!
        </p>
        <button className="cta-button">Get Started</button>
      </section>
    </div>
  );
};

export default HomePage;
