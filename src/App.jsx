import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('');
  
  return (
    <div className="app-container">
      {/* Dynamic Animated Background */}
      <div className="gradient-bg"></div>
      
      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon">🌿</span> EcoNautics
        </div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <button className="btn-primary-small">Get Early Access</button>
        </div>
      </nav>

      <main className="hero">
        <div className="hero-content">
          <div className="badge">SIH 2026 Finalist</div>
          <h1 className="hero-title">
            The Future of <span className="highlight">Green Maritime Fleet</span> Optimization.
          </h1>
          <p className="hero-subtitle">
            Leveraging Quantum-Inspired Genetic Algorithms (QIGA) and Real-Time Data to 
            decarbonize the shipping industry. Predict, optimize, and neutralize your carbon footprint.
          </p>
          
          <div className="cta-group">
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="email-input"
            />
            <button className="btn-primary">Join the Waitlist</button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="glass-card">
            <div className="glass-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="glass-body">
              <div className="stat-row">
                <span className="stat-label">Fuel Saved (Est)</span>
                <span className="stat-value green-text">24.5%</span>
              </div>
              <div className="stat-row">
                <span className="stat-label">Carbon Offset</span>
                <span className="stat-value">120 Tons</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section id="features" className="features">
        <div className="feature-card">
          <div className="feature-icon">⚛️</div>
          <h3>Quantum Optimization</h3>
          <p>Advanced QIGA algorithms for optimal route and speed profiles.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3>Real-Time Prediction</h3>
          <p>Accurate fuel consumption forecasting using live meteorological data.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🌱</div>
          <h3>Carbon Offsetting</h3>
          <p>Integrated carbon market to neutralize your fleet's emissions instantly.</p>
        </div>
      </section>
      
      <footer>
        <p>&copy; 2026 EcoNautics - SIH Problem 26138</p>
      </footer>
    </div>
  )
}

export default App
