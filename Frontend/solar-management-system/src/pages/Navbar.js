import React from "react";
import "./Navbar.css";
import logo from "../images/sun-logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/" className="navbar-link">
          <img src={logo} alt="Logo" className="navbar-icon" />
          <span className="navbar-title">Faculty Solar Management System</span>
        </a>
      </div>

      <ul className="navbar-links">
        <li className="navbar-item">
          <button className="navbar-button">
            <i className="fas fa-sun"></i> Overview
          </button>
        </li>
        <li className="navbar-item">
          <button className="navbar-button">
            <i className="fas fa-chart-bar"></i> Energy Data
          </button>
        </li>
        <li className="navbar-item">
          <button className="navbar-button">
            <i className="fas fa-bolt"></i> Optimization
          </button>
        </li>
        <li className="navbar-item">
          <button className="navbar-button">
            <i className="fas fa-file-alt"></i> Reports
          </button>
        </li>
        <li className="navbar-item">
          <button
            className="navbar-button"
            onClick={() => {
              window.location.href = "/equipment";
            }}
          >
            <i className="fas fa-cogs"></i> Equipment
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
