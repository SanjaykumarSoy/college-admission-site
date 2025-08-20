import React from "react";
import "./App.css";

function App() {
  return (
    <>
      {/* Animated Galaxy Background */}
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>
      {/* Nebula and Planet SVGs */}
      <svg className="nebula nebula1" viewBox="0 0 300 300" aria-hidden="true">
        <defs>
          <radialGradient id="nebulaGrad1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#a9d6ff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#090a0f" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="150" cy="150" rx="120" ry="70" fill="url(#nebulaGrad1)" />
      </svg>
      <svg className="nebula nebula2" viewBox="0 0 200 200" aria-hidden="true">
        <defs>
          <radialGradient id="nebulaGrad2" cx="40%" cy="60%" r="60%">
            <stop offset="0%" stopColor="#ffec8b" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#090a0f" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="100" cy="100" rx="90" ry="40" fill="url(#nebulaGrad2)" />
      </svg>
      <svg className="planet" viewBox="0 0 100 100" aria-hidden="true">
        <circle cx="50" cy="50" r="40" fill="#3a0ca3" />
        <ellipse cx="50" cy="60" rx="28" ry="10" fill="#a9d6ff" opacity="0.5" />
        <ellipse cx="50" cy="40" rx="18" ry="6" fill="#ffec8b" opacity="0.4" />
      </svg>
      {/* Header with logo that scrolls with content */}
      <header className="main-header">
        <img src="/symplogo.jpg" alt="Logo" className="logo" />
        <h1>AIZEN'25</h1>
      </header>
      <main>
        <section>
          <h2>Welcome to AIZEN'25</h2>
          <p>
            The ultimate tech fest at Saveetha School of Engineering. Explore the galaxy of innovation!
          </p>
        </section>
        {/* More sections/content here */}
      </main>
    </>
  );
}

export default App;
