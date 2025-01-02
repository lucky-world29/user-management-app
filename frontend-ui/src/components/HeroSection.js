// src/components/HeroSection.js
import React from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className="hero-section text-center text-white d-flex align-items-center justify-content-center" style={{ height: '80vh', background: 'linear-gradient(135deg, #4facfe, #00f2fe)' }}>
      <div>
        <h1 className="display-4">Welcome to User Management App</h1>
        <p className="lead">Manage users efficiently with our intuitive platform.</p>
        <Link className="btn btn-primary mx-2" to="/login">Login</Link>
        <Link className="btn btn-secondary mx-2" to="/registration">Register</Link>
      </div>
    </div>
  );
}

export default HeroSection;